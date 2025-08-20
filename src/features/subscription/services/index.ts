import Client from "../../../api/index"


export const GetAllSubscription = async (params?: any) => {
 const response = await Client.subscription.get_all(params); 
   console.log("Getting all subscription", response);
  if (response) {
    return response;
  }
};

export const CreatSubscription = async (params?: any) => {
 const response = await Client.subscription.create(params); 
   console.log("Creat subscription Successfully", response);
  if (response) {
    return response;
  }
};