import Client from '../../../api/index';

export const getAllInstitutes = async (params?: any) => {
	try {
		const response = await Client.institute.all(params);
		if (response) {
			return response;
		}
	} catch (error) {
		console.error('Error fetching institutes:', error);
	}
};
