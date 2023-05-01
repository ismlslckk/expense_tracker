import { ThunkDispatch } from "redux-thunk"

export interface Category {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
  
  export interface Rating {
    rate: number
    count: number
  }

  export interface GetCategoriesState {
    data: Category[];
    loading: boolean;
    error: string;
}

interface CATEGORIS_GET_START {
    type: "CATEGORIS_GET_START";
}

interface CATEGORIS_GET_SUCCESS {
    payload: Category[];
    type: "CATEGORIS_GET_SUCCESS";
}

interface CATEGORIS_GET_ERROR {
    type: "CATEGORIS_GET_ERROR";
    error: string;
}

export type GetCategoriesAction = CATEGORIS_GET_START | CATEGORIS_GET_SUCCESS | CATEGORIS_GET_ERROR;
export type GetCategoriesDispatch = ThunkDispatch<GetCategoriesState, void, GetCategoriesAction>;