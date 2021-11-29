import {combineReducers} from 'redux'
import {SearchReducer} from './searchReducer'
import {UserReducer} from './userReducer'

export const rootReducer = combineReducers({
  hotels: SearchReducer,
  user: UserReducer,
}
)