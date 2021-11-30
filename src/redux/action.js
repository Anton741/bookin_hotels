import  {LOAD_HOTELS, SET_HOTELS, LOGIN_IN, CLICK_FAVORITE} from './type' 

export function searchHotels(payload){
  return {
    type: LOAD_HOTELS,
    payload: payload
  }
}

export function setHotels(payload){
  return {
    type: SET_HOTELS,
    payload: payload
  }
}

export function logIn({password, email}){
  return {
    type: LOGIN_IN,
    password: password,
    login: email
  }
}

export function clickOnFavourites(bookmark){
  return {
    type: CLICK_FAVORITE,
    payload: bookmark,
  }
}

export function setSearch(payload){
  return {
    type: CLICK_FAVORITE,
    payload: payload,
  }
}
