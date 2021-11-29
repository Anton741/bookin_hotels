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


// export function showAlert(message, target){
//   console.log({[target]: message});
//   return {
//     type: SHOW_ALERT,
//     payload: {[target]: message}
//   }
// }





export function clickOnFavourites(bookmark){
  console.log(bookmark);
  return {
    type: CLICK_FAVORITE,
    payload: bookmark,
  }
}
// export function deleteBookmark(bookmark){
//   return {
//     type: DELETE_BOOKMARK,
//     payload: bookmark,
//   }
// }

// export function sortingHotel(item){
//   return {
//     type: SORTING,
//     payload: item
//   }

// }
