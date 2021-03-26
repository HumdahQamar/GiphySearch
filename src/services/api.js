import axios from "axios";
import config from "../../config";

const axiosInstance = axios.create();

export const api = async (q = "", offset = 0) => {
  try {
    const response = await axiosInstance.get(
      `${config.API_SEARCH_URL}?q=${q}&api_key=${config.API_KEY}&fmt=json&limit=10&offset=${offset}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
