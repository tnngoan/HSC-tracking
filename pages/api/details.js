import { connectLocal } from '../../server/controller'
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === "GET") {
    jwt.verify(req.headers.load, process.env.jwt_256bit_secret, (err, decoded) => {
      console.log(req.headers.load)
      if (err) {
        console.log(err)
      } else {
        console.log("decoded", decoded)
        if (decoded.containerNumber || decoded.HBLNo) {
          console.log(decoded.containerNumber)
          const data = connectLocal(decoded.containerNumber, decoded.HBLNo)
          console.log(data)
        } else {
          return res.status(400).json('Bad request. Missing parameter.');
        }
      }
      console.log("req.headers.load", req.headers.load)
    })
  } else {
    return res.status(405).end()
  }
}
export default handler;