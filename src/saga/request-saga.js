import {call, put, takeEvery} from 'redux-saga/effects';
import {requestFailure, requestSuccess} from '../store/actions';
import {_REQUEST} from '../store/constants';

function* requestSaga(action) {
  const {response, error} = yield call(sendAuthorizedRequest, action.payload, accessToken);
  if (!error) {
    yield put(requestSuccess(action.type, response.data, action.data));
  } else {
    yield put(requestFailure(action.type, error, action.data));
  }
}

export default function* watchRequest() {
  yield takeEvery(action => action.type !== LOGIN_REQUEST && action.type.endsWith(_REQUEST), requestSaga);
}
