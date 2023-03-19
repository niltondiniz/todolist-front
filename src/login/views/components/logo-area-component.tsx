import { LogoContainer, TaskMeText, VerticalContainer } from "../style";
import logo from '../../../assets/logo.png';

export default function LogoArea(){
    return (
        <VerticalContainer>
            <TaskMeText>Task.Me</TaskMeText>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>
        </VerticalContainer>
    )
}