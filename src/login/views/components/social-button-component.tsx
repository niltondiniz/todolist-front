import { useGoogleLogin } from "@react-oauth/google";
import GetButtonByType from "./get-button-by-type-component";

interface Props {
    type: string;
    text: string;
    sendAuthCode: any;
}

interface State {

}

export default function SocialButton(props: Props) {

    const { type, text, sendAuthCode } = props;

    const login = useGoogleLogin({
        onSuccess: credentialResponse => {            
            sendAuthCode(credentialResponse);
        },
    });

    return (

        <>

            <div onClick={() => login()} className={`social-button ${type}-color`}>
                <GetButtonByType type={type} />
                <span>{text}</span>
            </div>

        </>
    )


}