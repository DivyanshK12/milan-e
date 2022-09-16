import dbConnect from '../../../lib/dbConnect'
import Count from '../../../models/Count'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const count = await Count.findOne({ uid: id }).exec() /* find the model in the database */
        if (!count) {
          return res.status(204).send()
        }
        res.status(200).json({ success: true, data: count })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const count = await Count.findOneAndUpdate({ uid:id }, req.body, {
          new: true,
        }).exec()
        if (!count) {
          return res.status(404).json({ success: false })
        }
        res.status(200).json({ success: true, data: count })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
