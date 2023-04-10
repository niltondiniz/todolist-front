import { Box, Paper } from "@mui/material";
import { Component } from "react";
import UserModel from "../../shared/models/user-model";
import ResponsiveAppBar from "../../shared/views/components/app-bar-component";
import { ContainerScreen } from "../../shared/views/components/styled";

import LogoArea from "./components/logo-area-component";
import SocialButtons from "./components/social-buttons.component";
import { Container, LoginContainer } from "./style";

interface State {
    
}

interface Props {
    sendAuthCode: any;
    user: UserModel;
}

export default class LoginView extends Component<Props, State>{
    render() {       

        return (
            <ContainerScreen className="vh-100">
                <ResponsiveAppBar user={this.props.user} />
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                width: 800,
                                height: 400,
                            },
                        }}
                    >

                        <Paper>
                            <LoginContainer>
                                <SocialButtons sendAuthCode={this.props.sendAuthCode}/>
                                <div className="space">
                                    <div className="vertical-line"></div>
                                </div>
                                <LogoArea />
                            </LoginContainer>
                        </Paper>
                    </Box>
                </Container>
            </ContainerScreen>
        )
    }
}