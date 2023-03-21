import axios from "axios";

const myOwnChefBookApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

export default myOwnChefBookApi;
