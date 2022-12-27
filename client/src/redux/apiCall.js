import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    cookies.set("Ecom", res.data.Token);
    localStorage.setItem("eCommers", JSON.stringify(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
