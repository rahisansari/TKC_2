import { APPCONST } from "../constant/globalVar";
export default (() => {
   
    return {
        LOGIN: APPCONST.API_URL + 'api/login',
        homePageStaticData: APPCONST.API_URL + 'api/homePageStaticData',
    };
})();

