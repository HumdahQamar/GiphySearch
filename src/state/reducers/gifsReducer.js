import {
  FETCH_GIFS_PENDING,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR,
  SET_SELECTED_GIF,
  SET_OFFSET,
} from "../actions/index";

const initialState = {
  pending: false,
  gifs: [],
  query: "",
  error: null,
  currentGif: {},
  offset: 0,
  limit: 10,
};

export function gifsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        pending: false,
        gifs: action.gifs.data,
      };
    case SET_SELECTED_GIF:
      return {
        ...state,
        pending: false,
        selectedGif: action.gif,
      };
    case SET_OFFSET:
      return {
        ...state,
        pending: false,
        offset: action.offset,
      };
    case FETCH_GIFS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getGifs = (state) => state.gifsReducer.gifs;
export const getSelectedGif = (state) => state.gifsReducer.selectedGif;
export const getOffset = (state) => state.gifsReducer.offset;
