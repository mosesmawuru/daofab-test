import axios from "axios";

export const getAllData = async () => {
  const res = await axios.get("/all");
  return res.data;
};

export const getChildrenData = async (id: Number) => {
  const res = await axios.get(`/children-info/${id}`);
  return res.data;
}