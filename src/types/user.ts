import { ThunkDispatch } from "redux-thunk";

export interface User {
    message: string;
    username: string;
    email: string;
    full_name: string;
    token: string;
}

export interface LoginForm {
    username: string;
    password: string;
}

export interface UserState {
    data: User;
    loading: boolean;
    error: string;
}

interface LOGIN_START {
    type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
    payload: User;
    type: "LOGIN_SUCCESS";
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
    error: string;
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;