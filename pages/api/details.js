import { connectDB } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const returnObj = await connectDB("Container", req.body.value);
    if (!!returnObj) {
      res.status(500).json(returnObj || "undefined")
    } else {
      res.status(200).json(returnObj || "undefined")
    }
  } else {
    return res.status(405).end()
  }
}
export default handler;