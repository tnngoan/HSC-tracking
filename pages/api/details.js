import { connectDB } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log("type and value: ", req.body.type, req.body.value)
    const returnObj = await connectDB(req.body.type, req.body.value);
    if (!!returnObj) {
      res.status(500).json("No result found!")
    } else {
      res.status(200).json({
        message: "Connect successfully", data: {
          type: req.body.type, value: req.body.value
        }
      })
    }
  } else {
    return res.status(405).end()
  }
}
export default handler;