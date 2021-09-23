import { combineReducers } from 'redux'
import gameShop from './shopReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
    gameShop,
    search,
});

export default rootReducer;

