import { combineReducers } from "redux";
import userReducer from "./user/userReducer"
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: cakeReducer,
    user: userReducer
})

export default rootReducer