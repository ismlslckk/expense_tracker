import { UserState, User, UserAction } from "../../types";

const defaultState: UserState = {
    data: {} as User,
    loading: false,
    error: ""
}

const userReducer = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case "LOGIN_START":
            return ({ ...state, loading: true, error: "" }) as UserState
        case "LOGIN_SUCCESS":
            return ({ ...state, loading: false, data: action.payload }) as UserState
        case "LOGIN_ERROR":
            return ({ ...state, loading: false, error: "" }) as UserState

        default:
            return state;
    }
}


export default userReducer;