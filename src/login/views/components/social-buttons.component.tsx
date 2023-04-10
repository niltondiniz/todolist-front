import { VerticalContainer } from "../style";
import SocialButton from "./social-button-component";

interface Props {
    sendAuthCode: any;
}
export default function SocialButtons(props: Props) {
    return (
        <VerticalContainer>
            <SocialButton sendAuthCode={props.sendAuthCode} type="google" text="Sign in with Google" />
            <SocialButton sendAuthCode={props.sendAuthCode} type="facebook" text="Sign in with Facebook" />
            <SocialButton sendAuthCode={props.sendAuthCode} type="twitter" text="Sign in with Twitter" />
            <SocialButton sendAuthCode={props.sendAuthCode} type="github" text="Sign in with GitHub" />

        </VerticalContainer>
    )
}