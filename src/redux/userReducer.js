
import { LOGIN_IN, CLICK_FAVORITE } from './type' 

const initialState = {isLogin: false, current_user: {}}
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      if(!localStorage.getItem("users")){
        localStorage.setItem("users", JSON.stringify([]))
      }
      const users = JSON.parse(localStorage.getItem("users"))
      const user = users.filter(user=> user.email === action.login)
        if(user.length > 0 ){
          console.log(user, '333333333');
          if(user[0].password === action.password){
            console.log('dsfdfdsfsfsfsdfsf');
              return {current_user: user[0], isLogin: true}
          }else{
            return {current_user: {}, isLogin: false}
          }
        }else{
          const new_user = {
            id: 122334344333,
            password: action.password,
            email: action.login,
            bookmarks: [],
          }
          users.push(new_user)
          localStorage.setItem("users", JSON.stringify(users))
          return {isLogin: true, current_user: new_user}
        }
      
      // for (let user of users){
      //   if(user.email === action.login && user.password === action.password){
      //     console.log("TRUE");
      //       return {...state, isLogin: true}
      //   }else{
      //     return {...state, isLogin: false}
      //   }
      case CLICK_FAVORITE:
        if (state.current_user.bookmarks.length === 0){
          state.current_user.bookmarks.push(action.payload)
        }else{
          const existFav = state.current_user.bookmarks.findIndex(hotel => hotel.hotelId === action.payload.hotelId)
          if (existFav === -1){
            state.current_user.bookmarks.push(action.payload)
          }else{
            state.current_user.bookmarks = [...state.current_user.bookmarks.slice(0,existFav), ...state.current_user.bookmarks.slice(existFav+1,)]
          }
        }
        console.log(state.current_user);
        return {...state}
        

    default:
      return state 
  }
}