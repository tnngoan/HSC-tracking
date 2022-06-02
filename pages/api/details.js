import { connectLocal } from '../../server/controller'
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === "GET") {
    let decoded = {};
    try {
      decoded = jwt.verify(req.headers.load, process.env.jwt_256bit_secret)
      console.log(decoded)
    } catch (error) {
      res.status(401).json(error.message)
      return;
    }
    if (decoded.ContainerNo || decoded.HBLNo) {
      console.log(decoded.HBLNo)
      const data = await connectLocal(decoded.ContainerNo, decoded.HBLNo)
      console.log(data)
     
      // if (data.error) {
      //   res.status(500).json(data.error);
      // } else {
      //   res.status(200).json(data.details);
      // }
    } else {
      res.status(400).json('Bad request. Missing parameter.');
    }
  } else {
    return res.status(405).end()
  }
}
export default handler;