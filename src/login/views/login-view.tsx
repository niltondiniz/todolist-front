import { Box, Paper } from "@mui/material";
import { Component } from "react";

import LogoArea from "./components/logo-area-component";
import SocialButtons from "./components/social-buttons.component";
import { Container, LoginContainer } from "./style";

interface State{

}

interface Props{

}

export default class LoginView extends Component<Props, State>{
    render(){
        return (
            <Container className="vh-100">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 800,
                        height: 400,
                        },
                    }}
                >
                
                <Paper>
                    <LoginContainer>
                        <SocialButtons></SocialButtons>
                        <div className="space">
                            <div className="vertical-line"></div>
                        </div>
                        <LogoArea/>
                    </LoginContainer>
                </Paper>
                
                </Box>
            </Container>
        )
    }
}