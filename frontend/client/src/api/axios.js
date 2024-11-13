import axios from "axios";
import { baseUrl } from "../../url";


const instance = axios.create({
  // baseURL: 'http://localhost:4000/api',
  baseURL: `${baseUrl}/api`,
  withCredentials: true,
});

export default instance;