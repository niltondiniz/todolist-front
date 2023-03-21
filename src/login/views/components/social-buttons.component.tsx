import { VerticalContainer } from "../style";
import SocialButton from "./social-button-component";

export default function SocialButtons(){
    return (
        <VerticalContainer>            
            <SocialButton type="google" text="Sign in with Google" />                       
            <SocialButton type="facebook" text="Sign in with Facebook" />   
            <SocialButton type="twitter" text="Sign in with Twitter" />   
            <SocialButton type="github" text="Sign in with GitHub" />   
        </VerticalContainer>
    )
}