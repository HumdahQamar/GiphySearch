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
  console.log(action);
  switch (action.type) {
    case "FETCH_GIFS_PENDING":
      return {
        ...state,
        pending: true,
      };
    case "FETCH_GIFS_SUCCESS_ASYNC":
      return {
        ...state,
        pending: false,
        gifs: action.data.data,
      };
    case "SET_SELECTED_GIF_ASYNC":
      return {
        ...state,
        pending: false,
        selectedGif: action.gif,
      };
    case "SET_OFFSET":
      return {
        ...state,
        pending: false,
        offset: action.offset,
      };
    case "FETCH_GIFS_ERROR":
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
