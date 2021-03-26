import { all, fork } from "redux-saga/effects";
import { watchSearchQuery } from "./gifsSaga";

export function* rootSaga() {
  yield all([fork(watchSearchQuery)]);
}
