import { connectLocal } from '../../server/controller'

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { container, hbl } = req.query
    const resp = await connectLocal(container, hbl)
    return res.json(resp);
  }
  res.status(405).end()
}
export default handler;