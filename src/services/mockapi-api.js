import axios from "axios";

axios.defaults.baseURL = "https://6464ce8e127ad0b8f8a8a452.mockapi.io";

export const addMaterial = async (values) => {
  const res = await axios.post("/materials", values);
  return res.data;
};

export const getMaterials = async () => {
  const res = await axios.get("/materials");
  return res.data;
};

export const deleteMaterial = async (id) => {
  const res = await axios.delete(`/materials/${id}`);
  return res.data;
};

export const updateMaterial = async (fields) => {
  const res = await axios.put(`/materials/${fields.id}`, fields);
  return res.data;
};
