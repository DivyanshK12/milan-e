import dbConnect from '../../../lib/dbConnect'
import Count from '../../../models/Count'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const counts = await Count.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: counts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const count = await Count.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: count })
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
