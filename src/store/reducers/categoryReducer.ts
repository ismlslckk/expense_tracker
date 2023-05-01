import { UserState, User, UserAction, GetCategoriesState, Category, GetCategoriesAction } from "../../types";

const defaultState: GetCategoriesState = {
    data: [] as Category[],
    loading: false,
    error: ""
}

const categoryReducer = (state: GetCategoriesState = defaultState, action: GetCategoriesAction) => {
    switch (action.type) {
        case "CATEGORIS_GET_START":
            return ({ ...state, loading: true, error: "" }) as GetCategoriesState
        case "CATEGORIS_GET_SUCCESS":
            return ({ ...state, loading: false, data: action.payload }) as GetCategoriesState
        case "CATEGORIS_GET_ERROR":
            return ({ ...state, loading: false, error: action.error }) as GetCategoriesState

        default:
            return state;
    }
}


export default categoryReducer;