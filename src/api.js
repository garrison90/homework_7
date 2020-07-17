import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Content_Type: "application/json",
  },
});
