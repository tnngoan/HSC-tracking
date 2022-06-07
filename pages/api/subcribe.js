import { insertLocal } from "../../server/controller"
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    if (req.method === "POST") {
        let decoded = {};
        try {
            decoded = jwt.verify(req.headers.load, process.env.jwt_256bit_secret);
        } catch (error) {
            res.status(401).json(error.message);
            return;
        }
        if (decoded.ContactType && decoded.ContactNo && (decoded.ContainerNo || decoded.HBLNo)) {
            const returnMessage = await insertLocal(decoded.ContactType, decoded.ContactNo, decoded.ContainerNo, decoded.HBLNo)
            if (returnMessage) {
                res.status(500).json(returnMessage)
            } else {
                res.status(200).end()
            }
        } else {
            res.status(400).json('Bad request. Missing parameters')
        }
    } else {
        res.status(405).end()
    }
}