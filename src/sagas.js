import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from './api'

function* fetchDataGenerator(action) {
  try {
    const data = yield getPeople()
    yield put({type: FETCHING_DATA_SUCCESS, data})
  } catch(e) {
    yield put({type: FETCHING_DATA_FAILURE})
  }
}


function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchDataGenerator)
}

export default dataSaga