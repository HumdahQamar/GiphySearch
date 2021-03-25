import axios from "axios";
import config from "../../config";
import {
  fetchGifsSuccess,
  fetchGifsError,
  fetchGifsPending,
  // setSelectedGif,
} from "../state/actions";

const axiosInstance = axios.create();

export const api = (q = "", offset = 0) => {
  return function (dispatch) {
    dispatch(fetchGifsPending());
    axiosInstance
      .get(
        `${config.API_SEARCH_URL}?q=${q}&api_key=${config.API_KEY}&fmt=json&limit=10&offset=0`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchGifsSuccess(response.data));
          if (response.data.data.length > 0) {
            // console.log(response.data.data[0]);
            // dispatch(setSelectedGif(response.data.gifs.data[0]));
          }
        }
      })
      .catch(({ error }) => {
        dispatch(fetchGifsError(error));
      });
  };
};

// export const api = (q = "") => {
//   return function (dispatch) {
//     dispatch(fetchGifsPending());
//     axiosInstance
//       .get(
//         `${config.API_SEARCH_URL}?q=${q}&api_key=${config.API_KEY}&fmt=json&limit=10`
//       )
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(fetchGifsSuccess(response.data));
//           if (response.data.data.length > 0) {
//             // console.log(response.data.data[0]);
//             // dispatch(setSelectedGif(response.data.gifs.data[0]));
//           }
//         }
//       })
//       .catch(({ error }) => {
//         dispatch(fetchGifsError(error));
//       });
//   };
// };
