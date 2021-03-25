// import axios from "axios";
// import config from "../../config";
import { setSelectedGif, setDataOffset } from "../state/actions";

// const axiosInstance = axios.create();

export const selectGif = (gif = {}) => {
  return function (dispatch) {
    dispatch(setSelectedGif(gif));
    // axiosInstance
    //   .get(`${config.API_SEARCH_URL}?q=${q}&api_key=${config.API_KEY}&fmt=json`)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       dispatch(fetchGifsSuccess(response.data));
    //       if (response.data.data.length > 0) {
    //         console.log(response.data.data[0]);
    //         dispatch(setSelectedGif(response.data.gifs.data[0]));
    //       }
    //     }
    //   })
    //   .catch(({ error }) => {
    //     dispatch(fetchGifsError(error));
    //   });
  };
};

export const setOffset = (offset = 0) => {
  return function (dispatch) {
    dispatch(setDataOffset(offset));
  };
};
