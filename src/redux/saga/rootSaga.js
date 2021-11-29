import {fork} from "redux-saga/effects"
import {loadHotelsSagaWatcher} from './loadDataSaga'

export default function* rootSaga(){
  yield fork(loadHotelsSagaWatcher)
}