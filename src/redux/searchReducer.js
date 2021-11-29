import { SET_HOTELS } from './type' 


export const SearchReducer = (state = {hotels: null, countDays: 1}, action) => {
  switch (action.type) {
    case SET_HOTELS:
      console.log(action.payload);
      return ({...action.payload})
    default:
      break;
  }
  return state
}