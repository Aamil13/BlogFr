import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articlesSlice"


const store = configureStore({
    reducer:{
        articles: articleReducer
    }
    
})

export default store;