import axios from "axios";

export const httpAdapter = axios.create({
  baseURL: "http://localhost:8080",
});
