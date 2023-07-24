import axiosInterceptor from "../Interceptor";
import API from "../API";

async function staticContentUpdate(params) {
    
return axiosInterceptor.post(API.homePageStaticData, params);

}
export const homePageService = {

staticContentUpdate

};