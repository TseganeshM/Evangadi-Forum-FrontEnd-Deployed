import axios from "axios";

const axiosBase = axios.create({
  aseURL: "http://localhost:5500/api",
  //baseURL: "https://evangadi-forum-backend-deployed-5evk.onrender.com",
});

export default axiosBase;
