import { VerticalContainer } from "../style";
import SocialButton from "./social-button-component";

export default function SocialButtons(){
    return (
        <VerticalContainer>
            <SocialButton type="facebook" />
            <SocialButton type="twitter" />
            <SocialButton type="google" />
            <SocialButton type="github" />            
        </VerticalContainer>
    )
}