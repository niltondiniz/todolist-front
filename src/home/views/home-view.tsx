import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import React from "react";
import { Plus } from "react-bootstrap-icons";
import ResponsiveAppBar from "../../shared/views/components/app-bar-component";
import DialogFormComponent from "../../shared/views/components/dialog-form-component";
import { ContainerTask } from "./style";

interface Props{

}

interface State{
    dialogUpdateOpen: boolean;
    taskIdToUpdate: number;
    dialogCancelButtonText: string;
    dialogConfirmButtonText: string;
    dialogLabel: string;
    dialogMessage: string;
    dialogTitle: string;
}

export default class HomeView extends React.Component<Props, State>{

    constructor(props){
        super(props);        
    }

    state: State = {
        dialogUpdateOpen: false,
        taskIdToUpdate: 0,
        dialogCancelButtonText: "",
        dialogConfirmButtonText: "",
        dialogLabel: "",
        dialogMessage: "",
        dialogTitle: ""
    }

    private handleUpdateModalOpen = (taskId: number) => {
        this.setState({dialogUpdateOpen: true, taskIdToUpdate: taskId, dialogCancelButtonText: "Cancel", dialogConfirmButtonText: "Confirm", dialogLabel:"Task...", dialogMessage:"Would you update this task?", dialogTitle: "Update task"})
    }

    private handleDeleteModalOpen = (taskId: number) => {
        this.setState({dialogUpdateOpen: true, taskIdToUpdate: taskId, dialogCancelButtonText: "Cancel", dialogConfirmButtonText: "Remove", dialogLabel:"", dialogMessage:"Would you remove this task?", dialogTitle: "Remove task"})
    }

    private handleCloseDialog=()=>{
        this.setState({dialogUpdateOpen: false, taskIdToUpdate: 0})
    }

    render(){        
        const {dialogUpdateOpen, taskIdToUpdate, dialogCancelButtonText, dialogConfirmButtonText, dialogLabel, dialogMessage, dialogTitle} = this.state;
        console.log(dialogUpdateOpen);
        return(
            <div className="vh-100">
                <ResponsiveAppBar></ResponsiveAppBar>
                <ContainerTask className="mt-5"> 
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100%', width: '90%'
                        }}
                    >
                        <Paper sx={{height: '100%', width: '100%'}}>
                            
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Box sx={{ display: 'flex', width: 'auto', mt: 2,  mx: 2 }}>
                                    <TextField label="Type here your new task" fullWidth sx={{ mr: 1 }} />
                                    <Button variant="contained" color="primary">
                                        <Plus fontSize={30} fontWeight={800}/>
                                    </Button>
                                </Box>
                                
                                <Box sx={{display: 'flex', flexDirection: 'column', height: 475, overflow: 'auto', my: 5}}>
                                    <List>
                                    {
                                        [
                                            { id: 1, text: 'Levar o carro no mecânico' },
                                            { id: 2, text: 'Ligar para construtora' },
                                            { id: 3, text: 'Agendar consulta para dia 19/06' },
                                            { id: 4, text: 'Dar banho no cachorro' },
                                            { id: 5, text: 'Levar o carro no mecânico' },
                                            { id: 6, text: 'Ligar para construtora' },
                                            { id: 7, text: 'Agendar consulta para dia 19/06' },
                                            { id: 8, text: 'Dar banho no cachorro' },
                                            { id: 9, text: 'Levar o carro no mecânico' },
                                            { id: 10, text: 'Ligar para construtora' },
                                            { id: 11, text: 'Agendar consulta para dia 19/06' },
                                            { id: 12, text: 'Dar banho no cachorro' }
                                        ].map((item) => (
                                        <ListItem key={item.id} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                <Checkbox color="secondary" />
                                                </ListItemIcon>
                                                <ListItemText disableTypography style={{fontSize: 25, fontFamily: 'Roboto', color: '#404040'}} primary={item.text} />
                                            </ListItemButton>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton onClick={() => this.handleDeleteModalOpen(item.id)}>
                                                <Delete color="secondary" />
                                                </IconButton>
                                                <IconButton onClick={() => this.handleUpdateModalOpen(item.id)}>
                                                <Edit color="secondary" />
                                                </IconButton>
                                            </Box>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </ContainerTask>
                <DialogFormComponent 
                    propsOpen={dialogUpdateOpen} 
                    taskId={taskIdToUpdate} 
                    handleClose={this.handleCloseDialog} 
                    dialogButtonCancelText={dialogCancelButtonText}
                    dialogButtonConfirmText={dialogConfirmButtonText}
                    dialogLabel={dialogLabel}
                    dialogMessage={dialogMessage}
                    dialogTitle={dialogTitle}
                    
                />
            </div>
        )
    }
}