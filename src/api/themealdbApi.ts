import axios from "axios";

const themealdbApi = axios.create({
  // posible apikey: 9973533
  baseURL: "https://www.themealdb.com/api/json/v2/1",
  // baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export default themealdbApi;
