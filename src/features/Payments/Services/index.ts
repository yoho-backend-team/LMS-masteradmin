import Client from "../../../api/index"

export  const getPaymentService = async (params:any)=>{
   
    try {
         const response = await Client.payments.get_all(params)
         if(response){
            return response;
         }
    } catch (error) {
        console.log("error in get all payments:",getPaymentService)
    }
      
};




