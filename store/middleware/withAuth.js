import { useRouter } from 'next/router';
//import { useSelector } from 'react-redux';
import { APPCONST } from '../constant/globalVar';


const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        if (typeof window !== 'undefined') {
            const accessToken = localStorage.getItem(APPCONST.AccessToken);
            
            if (!accessToken) {
                router.replace(APPCONST.LOGINURL)
                return null;
            }

            //const userInfo =  useSelector(state=>state.userData?.info);
           
            
            /* if(userInfo?.map_region != undefined){
                if(userInfo?.detail_status){
                    if(userInfo?.is_accept === false){
                    localStorage?.clear();
                    router.replace(APPCONST.LOGINURL);                  
                    }            
                } else {
                    if(router.pathname != APPCONST.LANDING_PAGE_DETAILS) {
                        router.replace(APPCONST.LANDING_PAGE_DETAILS)
                    }
                }
            } */

          

            // If this is an accessToken we just render the component that was passed with all its props
            return <WrappedComponent {...props} />;
        }

        // If we are on server, return null
        return null;
    };
};

export default withAuth;