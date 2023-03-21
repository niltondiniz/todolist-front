import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { ContainerUser } from "./style";

export default class userView extends React.Component{
    render() {
        return(
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 800,
                        height: 400
                    }
                }}>
                    <Paper>
                        <ContainerUser className="vh-100">
                            <h1>Informação 1</h1>
                        </ContainerUser>
                    </Paper>
                </Box>
            </Container>
        );
    }
}