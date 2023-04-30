import { combineReducers } from "redux";
import { userReducer } from "./reducers";
import { UserState } from "../types";

export interface AppState {
    user: UserState;/* 
    categories: any;
    records: any; */
}

// it stores global states
const rootReducer = combineReducers<AppState>({
    user: userReducer,
    /* categories: () => { },
    records: () => { } */
});

export default rootReducer;