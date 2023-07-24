import { useEffect, useState } from "react";
import { userServices } from "@/store/services/userServices";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import showNotification from "@/helpers/show_notification";
import { useRouter } from 'next/router'
import Link from "next/link";
import store from "store"
import { APPCONST } from "@/store/constant/globalVar";
import { Router } from "next-routes";
const Login = () => {

   // const item = localStorage?.getItem(APPCONST.AccessToken);
    
  
    const [isSubmittingLoader, setIsSubmittingLoader] = useState(false);
    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState('');
    const [fieldpassword, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
   
    const router = useRouter();

    
    useEffect(() => {
        if (localStorage!== undefined) {
            let item =localStorage?.getItem(APPCONST.AccessToken);
           if(item){
            router.push("/admin/home"); 
           }         
        }
    }, )
   
    const signInData = async () => {
        // try {



        //     if (email != "" && fieldpassword != '') {
        //         let formData = new FormData();
        //         //setIsSubmittingLoader(true);
        //         formData.append('email', email);
        //         formData.append('password', fieldpassword);

        //         const getResponse = await userServices.login(formData);
        //         console.log('getResponse', getResponse);

        //         if (getResponse?.status) {
        //             //     setResponseStatus(getResponse.status);
        //             //     //await dispatch(userAction.setUserInfo(getResponse));
        //             //     setIsSubmittingLoader(false);
        //             //     if (getResponse?.error?.status_code == 102 || getResponse?.error?.status_code == 107) {
        //             //         setMsg(getResponse.error.message);

        //             //     } else {
        //             //         localStorage.setItem(APPCONST.AccessToken, getResponse.response_data.token);
        //             //         localStorage.setItem(APPCONST.isAccessPanel, getResponse.response_data?.user_data?.is_access_panel);

        //             //         if (getResponse.response_data?.user_data.user_role == 6) {
        //             //             //await dispatch(userAction.setUserInfo({}));
        //             //             localStorage?.clear();
        //             //             router.push('/login/?v=invalid');
        //             //         } else {
        //             //             if (getResponse.response_data?.user_data?.detail_status) {
        //             //                 if (getResponse.response_data?.user_data?.is_accept == true) {
        //             //                     setIsAccept(false);
        //             //                     router.push(APPCONST.Dashboard)
        //             //                 } else {
        //             //                     //await dispatch(userAction.setUserInfo({}));
        //             //                     localStorage?.clear();
        //             //                     router.push('/login/?v=f');
        //             //                 }
        //             //             } else {
        //             //                 router.push(APPCONST.LANDING_PAGE_DETAILS)
        //             //             }
        //             //         }
        //             //     }
        //         } else {
        //             //     setResponseStatus(getResponse.status);
        //             //     setMsg(getResponse.error.message);
        //             //     setIsSubmittingLoader(false);
        //         }
        //     } else {
        //         // setMsg("Email and password is required")
        //         // setIsSubmittingLoader(false);
        //     }

        // } catch (e) {
        //     // if (e && e.error && e.error.message) {
        //     //     setMsg(e.error.message);
        //     // }
        //     // setIsSubmittingLoader(false);
        // }




        // Create a new gift object
        try {
            const response = await axios.post(`https://nextupgrad.com/kindness_project/api/login`,
                {
                    email: email,
                    password: fieldpassword
                }
            );
            console.log(response, "response");
            if (response?.data?.success) {
               // store.set("user", response?.data?.data);
                store.set("test", "test");
                localStorage.setItem(APPCONST.AccessToken,response?.data?.data?.token);
                showNotification(response?.data?.message, "Success");
                router.push("/admin/home");
                
            } else {
                showNotification(response?.data?.message, "Error");

            }
        } catch (error) {
            console.error(error);
        }








    }

    const handleChange = (fieldname, data) => {

        if (fieldname == 'email') {
            setEmail(data?.target?.value);
        }

        if (fieldname == 'password') {
            setPassword(data?.target?.value)
        }
    }

    return (

        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2" />
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-key">
                                <i className="fa fa-key" aria-hidden="true" />
                            </div>

                            <div className="col-lg-12 login-title">TKC ADMIN PANEL</div>
                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">

                                    <form name="login">
                                        <div className="form-group">
                                            <label className="form-control-label">Email</label>
                                            <input type="email" className="form-control" onChange={(data) => handleChange("email", data)} value={email} name="user_email" required />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input type="password" className="form-control" onChange={(data) => handleChange("password", data)} value={fieldpassword} name="password" required />
                                        </div>

                                        <div className="col-lg-12 loginbttm">

                                            {/* <div className="col-lg-6 login-btm login-text">
                                            <Link href={"/admin/signup"}>Signup</Link>
                                            </div> */}


                
                                            <div className="col-lg-12 login-btm login-button">
                                                {isSubmittingLoader ? <Spinner style={{ width: '20px', height: '20px', color: '#fff' }} animation="border" /> :
                                                    <button
                                                        type="button"
                                                        onClick={signInData}
                                                        className="btn btn-outline-primary">
                                                        LOGIN
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;