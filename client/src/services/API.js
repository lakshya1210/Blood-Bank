import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

API.interceptors.request.use((req) => {
  console.log("req", req);
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
