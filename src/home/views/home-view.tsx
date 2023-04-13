import { Box, Paper } from "@mui/material";
import React from "react";
import UserEntity from "../../shared/models/user-model";
import ResponsiveAppBar from "../../shared/views/components/app-bar-component";
import { ContainerScreen } from "../../shared/views/components/styled";
import TaskController from "../../task/controllers/task-controller";
import { ContainerTask } from "./style";

interface Props {
    user: UserEntity;
}

interface State {

}

export default class HomeView extends React.Component<Props, State>{

    constructor(props) {
        super(props);
    }

    state: State = {

    }

    private handleCloseDialog = () => {
        this.setState({ dialogUpdateOpen: false, taskIdToUpdate: 0 })
    }

    render() {


        return (
            <ContainerScreen className="vh-100">
                <ResponsiveAppBar user={this.props.user}></ResponsiveAppBar>
                <ContainerTask className="mt-5">
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100%', width: '90%'
                        }}
                    >
                        <Paper sx={{ height: '100%', width: '100%' }}>

                            <TaskController userId={this.props.user!.id} />

                        </Paper>
                    </Box>
                </ContainerTask>
            </ContainerScreen>
        )
    }
}