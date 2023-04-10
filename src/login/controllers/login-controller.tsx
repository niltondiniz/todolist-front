import jwtDecode from "jwt-decode";
import auth from "../models/services/login-service";
import LoginView from "../views/login-view";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

export default function LoginController() {

    const navigate = useNavigate();

    useEffect(() => {
        const cookiesData = Cookies.get('access_token');
        if (cookiesData) {
            const decodedToken = jwtDecode(cookiesData);           
            if (decodedToken['exp'] > Math.floor(Date.now() / 1000)) {                
                if(decodedToken['birthday'] !== null){
                    navigate('/home/');
                }else{
                    navigate('/profile/');
                }
                
            } else {                
                navigate('/login/');
            }
        }
    }, []);

    async function sendAuthCode(authCode: string){
        
        console.log(authCode);
        const response = await auth(authCode['access_token']);
        const tokenDecoded = jwtDecode(response['token']);

        console.log(response);

        Cookies.set(
            'access_token', 
            response['token'], 
            { expires: 1 }
        );

        if (tokenDecoded['birthday'] !== null) {
            navigate('/home/');
        } else {
            navigate('/profile/');
        }
    }

    return (
        <LoginView user={getUserFromCookies()} sendAuthCode={sendAuthCode} />
    )

}