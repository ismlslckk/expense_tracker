import { combineReducers } from "redux";
import { userReducer } from "./reducers";
import { GetCategoriesState, UserState } from "../types";
import categoryReducer from "./reducers/categoryReducer";

export interface AppState {
    user: UserState;
    categories: GetCategoriesState;
    /*
    records: any; */
}

// it stores global states
const rootReducer = combineReducers<AppState>({
    user: userReducer,
    categories: categoryReducer
    /* categories: () => { },
    records: () => { } */
});

export default rootReducer;