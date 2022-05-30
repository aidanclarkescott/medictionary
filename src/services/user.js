import axios from "axios";
const baseUrl = "http://localhost:4000/patients";

export const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${baseUrl}/${id}`, user);
  return response.data;
};
