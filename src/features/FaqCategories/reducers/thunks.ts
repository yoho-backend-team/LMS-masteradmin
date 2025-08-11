import { getCategoriesData } from "../services";
import { getCategories } from "./CategoriesSlice";

export const getCategoriesThunks = (params: any) => async (dispatch: any) => {
    try {
        const response = await getCategoriesData(params)
        dispatch(getCategories(response.data.data.data));
        console.log(response.data.data.data, "Categories Response");
        return response;
    } catch (error) {
        console.error(error);
    }
};

