import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../Slices/authSlice"
import ProfileSlice from "../Slices/ProfileSlice"
import cartSlice from "../Slices/cartSlice"
import courseSlice from "../Slices/courseSlice"
const rootReducer=combineReducers({
    auth:authReducer,
    profile:ProfileSlice,
    cart:cartSlice,
    course:courseSlice,
})

export default rootReducer