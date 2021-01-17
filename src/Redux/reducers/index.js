import { combineReducers } from 'redux'

import bauCuaReducer from "./BauCua";
import burgerReducer from './Burger'

const rootReducer = combineReducers({
    burgerReducer,
    bauCuaReducer,
})

export default rootReducer;