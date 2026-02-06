import API from "./api";

export const getAllRides = async () => {
  const res = await API.get("/rides");
  return res.data;
};

export const createRide = async (data) => {
  const res = await API.post("/rides", data);
  return res.data;
};
