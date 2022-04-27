import { connectDB } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const returnObj = await connectDB("container", req.body.value);
    if (!!returnObj) {
      res.status(500).json(returnObj || "No result found!")
    } else {
      res.status(200).json(returnObj || "Here's what I found:")
    }
  } else {
    return res.status(405).end()
  }
}
export default handler;