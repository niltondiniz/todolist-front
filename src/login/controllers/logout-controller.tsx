import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogoutController() {

    const navigate = useNavigate();

    useEffect(() => {
        Cookies.remove('access_token');
        navigate('/login/');
        
    }, []);

    return (
        <h1>Saindo!</h1>
    )

}