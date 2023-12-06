import axios from "axios";

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default clientAxios;
