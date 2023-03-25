import axios from "axios";

export const testloAPI = axios.create({
  baseURL: "/api",
});

export default testloAPI;
