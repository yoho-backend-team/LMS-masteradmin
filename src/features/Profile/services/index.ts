import Client from '../../../api/index';

export const getProfileData = async (params: any) => {
    const response = await Client.auth.get_profile(params)
    if (response) {
        return response;
    }
};
