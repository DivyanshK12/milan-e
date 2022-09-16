import dbConnect from '../../../lib/dbConnect'
import Rating from '../../../models/Rating'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const rating = await Rating.findOne({ uid: id }).exec() /* find the model in the database */
        if (!rating) {
          return res.status(204).send()
        }
        res.status(200).json({ success: true, data: rating })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const rating = await Rating.findOneAndUpdate({ uid:id }, req.body, {
          new: true,
        }).exec()
        if (!rating) {
          return res.status(404).json({ success: false })
        } // PUT a new rating 
        res.status(200).json({ success: true, data: rating })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
