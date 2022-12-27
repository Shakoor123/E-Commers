import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJkNGRlYjM3MmYwOWE4MTVjMTJlZjYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTY5NjEwODgsImV4cCI6MTY1NzIyMDI4OH0.fiJhOSk2gXflSVQZ0vib-HroJferP0R2paumROJiMUs";
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });
export const publicRequest = axios.create({
  baseURL: "http://localhost:5000/api",

  cookie: cookies.get("Ecom"),
});

export const userRequest = axios.create({
  baseURL: "http://localhost:5000/api",
});
