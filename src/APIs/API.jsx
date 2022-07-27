import axiosInstance from "./axios";

const loginUser = async (payload) => {
  const response = await axiosInstance.get(
    "/login?provider=napollo&platform=android",
    payload
  );
  return response?.data;
};

const NAPOLLO_API = {
  loginUser,
};

export default NAPOLLO_API;
