import cards from "./cards.json";

export default function requestHandler(req, res) {
  if (req.method === "GET") {
    res.status(200);
    res.json({ cards });
  }
}
