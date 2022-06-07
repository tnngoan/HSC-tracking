import { connectLocal } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { containerNumber, HBLNumber } = req.query
    console.log('params', { containerNumber, HBLNumber })

    const resp = await connectLocal(containerNumber, HBLNumber)
    return "data from handler" + res.json(resp);
  }
  res.status(405).end()
}
export default handler;