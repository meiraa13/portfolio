import axios from "axios";
import { userData } from "../utils/userData";

export const api = axios.create({
    baseURL:`https://api.github.com/users/${userData.github}`,
    timeout:5000
})