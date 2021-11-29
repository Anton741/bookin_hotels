import {takeEvery, put } from "redux-saga/effects";
import {LOAD_HOTELS,  } from "../type"
import {loadCity} from '../../service/http.service'
import {setHotels} from "../action"

export function* loadHotelsSagaWatcher(){
  yield takeEvery(LOAD_HOTELS, loadData)
}

function* loadData(action){
  const {payload} = action
  console.log("pay", payload);
  const hotels = yield loadCity(payload);
  yield put(setHotels({hotels: hotels, countDays: payload.countDays}))
}