import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import { persistReducer, persistStore } from "redux-persist";


const rootReducer = combineReducers({
    auth: UserSlice
})

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const Store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
            serializableCheck:false
    })
})

export const persistor = persistStore(Store)
export default Store;
