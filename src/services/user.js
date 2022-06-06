import axios from "axios";
const baseUrl = "http://localhost:4000/patients";

export const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  console.log("Get user response: ", response.data);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.patch(`${baseUrl}/${id}`, user);
  console.log("Update user response: ", response.data);
  return response.data;
};
