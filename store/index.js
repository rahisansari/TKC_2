import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        //counter: counterReducer
    }
})