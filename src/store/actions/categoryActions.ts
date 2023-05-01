import { Category, GetCategoriesDispatch } from "../../types/";
import { api } from "../../utils";

export const getCategories = () => async (dispatch: GetCategoriesDispatch) => {

    dispatch({ type: "CATEGORIS_GET_START" });

    try {
        const response = await api().get<string[]>("/products/categories");

        let id = 1;
        const data = response.data.map((categoryName) => {
            const categoryId = id++;
            return {
                id: categoryId,
                title: categoryName,
                description: 'test ' + categoryId,
            } as Category;
        });
        dispatch({
            type: "CATEGORIS_GET_SUCCESS", payload: data
        });
    } catch (error: any) {
        dispatch({ type: "CATEGORIS_GET_ERROR", error: error.message });
    }

};