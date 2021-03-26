import { setSelectedGif, setDataOffset } from "../state/actions";

export const selectGif = (gif = {}) => {
  return setSelectedGif(gif);
};

export const setOffset = (offset = 0) => {
  return function (dispatch) {
    dispatch(setDataOffset(offset));
  };
};
