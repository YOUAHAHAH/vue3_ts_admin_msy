import { Get, Post } from "../request";
import type { IAnyObj } from "../type";

export const userLogin = (data: IAnyObj) =>
  Post("http://175.178.169.52:8989/user/login", data);

export const userGetRouters = () =>
  Get("http://175.178.169.52:8989/api/getRouters");

export const getList = (data: IAnyObj) =>
  Get("http://admin.youah.cc/api/tableList", data);

// export const GetSearchSuggest = (data: IAnyObj) => {
//   Post("http://admin.youah.cc/api/searchTableList", data);
// };

export const sendEmail = (data: IAnyObj) => {
  Post("http://localhost:3000/api/emailSend", data);
};
