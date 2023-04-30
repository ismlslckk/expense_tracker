import { LoginForm, User, UserDispatch } from "../../types/";
import { api } from "../../utils";

export const login = (creds: LoginForm) => async (dispatch: UserDispatch) => {

    dispatch({ type: "LOGIN_START" });

    try {
        const response = await api().post<User>("/auth/login", creds);
        response.data.username = creds.username;
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error: any) {
        dispatch({ type: "LOGIN_ERROR", error: error.message });
    }

};