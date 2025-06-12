import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './features/UserSlice.jsx'
import sidebarReducer from './features/SidebarSlice.jsx'

const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer
})

export default rootReducer