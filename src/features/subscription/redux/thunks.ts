
import { GetAllSubscription } from "../services";
import { getSubscription } from "./reduxSlice";

export const GettingAllSubscriptionThunks = (params?: any) => async (dispatch: any) => {
  try {
    const response = await GetAllSubscription(params);
    const result = response?.data || [];
    console.log("asdfghjkl",result)
    dispatch(getSubscription(result));
    return result;
  } catch (error) {
    console.log("Error in GetAllSubscription Thunks:", error);
  }
};
