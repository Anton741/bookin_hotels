import { SET_HOTELS, CURRENT_SEARCH } from './type' 


export const SearchReducer = (state = {hotels: null, countDays: 1, checkIn:null, city:null}, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return ({...action.payload})
    case CURRENT_SEARCH:
      return ({...state, ...action.payload})
    default:
      break;
  }
  return state
}