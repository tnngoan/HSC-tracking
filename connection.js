import axios from "axios";
const DUMMY_API_URL = "http://localhost:3000/";

export default axios.create({
  baseURL: DUMMY_API_URL,
  header: {
    "Content-type": "application/json",
  },
});
