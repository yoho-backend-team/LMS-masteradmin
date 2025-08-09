import { getProfileData } from '../services'; 
import { getProfile } from './ProfileSlice';

export const getProfileThunks =
    (params:any) => async (dispatch: any) => {
        try {
            const response = await getProfileData(params);
            dispatch(getProfile(response.data));
            console.log(response.data,"Profile Response")
            return response
        } catch (error) {
            console.log(error);
        }
    };
