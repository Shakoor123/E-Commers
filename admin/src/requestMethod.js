import axios from "axios";
import { token } from "./context/darkmodeContext";
const BASE_URL = "http://localhost:5000/api/";

let user = JSON.parse(localStorage.getItem("eCommersUser"));
console.log(user);
let TOKEN = user?.Token;
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  // headers:{token:`shakoor ${TOKEN}`},
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `shakoor ${TOKEN}` },
});
