import axios from "axios";

const baseURL =
  "http://napollo-env-1.eba-gyut3nvj.us-east-2.elasticbeanstalk.com/napollo";
const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  Authorization: "Basic eW9vOjEyMzQ1Njc=",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  console.log(`${config.baseURL}${config.url}`);
  console.log(config);
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
