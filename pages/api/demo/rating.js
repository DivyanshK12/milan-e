import dbConnect from '../../../lib/dbConnect'
import Rating from '../../../models/Rating'
import demojson from '../../../demoRating.json'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const ratings = await Rating.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: demojson })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const rating = await Rating.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: rating })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    default: {
        console.log(method)
        res.status(400).json({ success: false })
      }
      break
  }
}
