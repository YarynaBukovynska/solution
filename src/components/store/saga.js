import { put, call, takeLeading } from 'redux-saga/effects';
import { LOAD_DATA, SET_MARKERS } from './types';
import { getData } from '../../api';

export function* loadMarkersSaga({ data }) {
  const markers = yield call(getData, data);
  yield put({ type: SET_MARKERS, data: markers });
}

export function* markersSaga() {
  yield takeLeading(LOAD_DATA, loadMarkersSaga);
}
