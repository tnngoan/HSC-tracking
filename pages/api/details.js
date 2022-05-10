import { connectDB } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const returnObj = await connectDB(req.body.type, req.body.value);
    if (!!returnObj) {
      res.status(500).json("No result found!")
    } else {
      res.status(200).json(returnObj)
    }
  } else {
    return res.status(405).end()
  }
}
export default handler;