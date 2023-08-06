import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";




const marineClient = create({
    baseURL: "https://marine-api.open-meteo.com",
});



const get = marineClient.get;
marineClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
  
    if (response.ok) {
      cache.store(url, response.data);
      
      return response;
    }
  
    const data = await cache.get(url);

    return data ? { ok: true, data } : response;


    // return response;
};




export default marineClient;
