import { UserState, User, UserAction } from "../../types";

const defaultState: UserState = {
    data: {} as User,
    loading: false,
    error: ""
}

const userReducer = (state: UserState = defaultState, action: UserAction) => {
    return state;
}


export default userReducer;