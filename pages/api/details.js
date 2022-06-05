import { connectLocal } from '../../server/controller'
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === "GET") {
    const {containerNumber, HBLNo} = req.query
    console.log('params',  {containerNumber, HBLNo})

    const resp = await connectLocal(containerNumber, HBLNo)
    return res.json(resp);    
  }
  res.status(405).end()
}
export default handler;