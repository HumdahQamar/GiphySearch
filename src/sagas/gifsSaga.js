import { takeLatest, put, call } from "redux-saga/effects";
import { api } from "../services/api";

function* fetchGifsSuccessAsync(action) {
  try {
    const data = yield call(api, action.query);
    yield put({
      type: "FETCH_GIFS_SUCCESS_ASYNC",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* setSelectedGifAsync(action) {
  console.log(action);
  yield put({
    type: "SET_SELECTED_GIF_ASYNC",
    gif: action.gif,
  });
}
export function* watchSearchQuery() {
  yield takeLatest("FETCH_GIFS", fetchGifsSuccessAsync);
}

export function* watchSelectedGif() {
  yield takeLatest("SET_SELECTED_GIF", setSelectedGifAsync);
}
