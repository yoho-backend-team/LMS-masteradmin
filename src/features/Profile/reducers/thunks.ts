import { getProfileData } from '../services'; 
import { getProfile } from './ProfileSlice';

export const getProfileThunks =
    (params:any) => async (dispatch: any) => {
        try {
            const response:any = await getProfileData(params);
            dispatch(getProfile(response.data.data));
            console.log(response.data.data,"Profile Response")
            return response
        } catch (error) {
            console.log(error);
        }
    };
