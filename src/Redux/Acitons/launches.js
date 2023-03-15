import axios from "axios";
import { ENDPOINTS, BASE_URL } from "./ActionTypes";

export const API = axios.create({
  baseURL: BASE_URL,
});

export const fetchLaunchesAPI = async (body) => {
  const res = await API.post(ENDPOINTS.LAUNCHES, body);
  return res.data;
};
