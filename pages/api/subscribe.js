import { insertLocal } from "../../server/controller"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const contact = req.body.body;
        const resp = await insertLocal(contact);
        return res.json(resp)
    }
    res.status(405).end()
}

export default handler