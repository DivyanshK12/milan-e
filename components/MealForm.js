import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import { MenuFormTable } from './MenuFormTable'
import { getRating } from '../lib/getRating'

const MealForm = ({ formId, mealForm, items, hall, meal, date }) => { // will use itemCount to set number of sliders
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [form, setForm] = useState(mealForm)

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const id = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}_${hall}_${meal}`

    let currentRating = getRating(form);
    const body = {
      uid: id,
      meal: meal,
      hall: hall,
      date: date,
      count: 1,
      rating: currentRating
    }; // need to get count and rating from db

    try {

      const resOld = await fetch(`/api/rating/${id}`, { method: 'GET' })

      if (resOld.status === 200) {
        resOld.json().then((dataOld) => {
          body.rating = (dataOld.data.rating * dataOld.data.count + currentRating) / (dataOld.data.count + 1)
          body.count = dataOld.data.count + 1
        }).then(async () => {
          const res = await fetch(`/api/rating/${id}`, {
            method: 'PUT',
            headers: {
              Accept: contentType,
              'Content-Type': contentType,
            },
            body: JSON.stringify(body), // need to override this json
          })
  
          // Throw error with status code in case Fetch API req failed
          if (!res.ok) {
            throw new Error(res.status)
          }
        })

      } else if (resOld.status === 204) {
        const res = await fetch(`/api/rating`, {
          method: 'POST',
          headers: {
            Accept: contentType,
            'Content-Type': contentType,
          },
          body: JSON.stringify(body), // need to override this json
        })
      } else {
        throw new Error(resOld.status)
      }
    } catch (error) {
      setMessage('Failed to update rating')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    putData(form)
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <MenuFormTable items={items} changeFn={handleChange} />
      </form>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default MealForm
