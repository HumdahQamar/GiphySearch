export const FETCH_GIFS_PENDING = "FETCH_GIFS_PENDING";
export const FETCH_GIFS_SUCCESS = "FETCH_GIFS_SUCCESS";
export const FETCH_GIFS_ERROR = "FETCH_GIFS_ERROR";
export const SET_GIFS = "SET_GIFS";
export const FETCH_GIFS = "FETCH_GIFS";
export const SET_SELECTED_GIF = "SET_SELECTED_GIF_ASYNC";
export const SET_OFFSET = "SET_OFFSET";

export function fetchGifsPending() {
  return {
    type: FETCH_GIFS_PENDING,
  };
}

export const fetchGifsSuccess = (gifs) => ({
  type: FETCH_GIFS_SUCCESS,
  gifs,
});

export const fetchGifs = (query) => ({
  type: FETCH_GIFS,
  query,
});

export function fetchGifsError(error) {
  return {
    type: FETCH_GIFS_ERROR,
    error,
  };
}

export function setGifs(gifs) {
  return {
    type: SET_GIFS,
    gifs,
  };
}

export function setSelectedGif(gif) {
  return {
    type: SET_SELECTED_GIF,
    gif,
  };
}

export function setDataOffset(offset) {
  return {
    type: SET_OFFSET,
    offset,
  };
}
