
import { Delete, Edit } from "@mui/icons-material";
import { Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Plus } from "react-bootstrap-icons";
import DialogFormComponent from "../../shared/views/components/dialog-form-component";
import {TaskEntity} from "../models/entities/task-entity";
import TaskTextComponent from "./components/task-text-component";


interface Props {
    tasks: TaskEntity[];
    handleChange: any;
    handleSubmit: any;
    handleDeleteTask: any;
    handleUpdateTask: any;
    task: string;    
}

interface State {
    dialogUpdateOpen: boolean;
    dialogCancelButtonText: string;
    dialogConfirmButtonText: string;
    dialogLabel: string;
    dialogMessage: string;
    dialogTitle: string;
    task: string;
    tasks: TaskEntity[];
    taskToWork: TaskEntity;
}

export default class TaskView extends React.Component<Props, State>{

    state: State = {
        dialogUpdateOpen: false,
        dialogCancelButtonText: "",
        dialogConfirmButtonText: "",
        dialogLabel: "",
        dialogMessage: "",
        dialogTitle: "",
        task: "",
        tasks: [],
        taskToWork: null
    }

    private handleUpdateModalOpen = (task: TaskEntity) => {
        this.setState({ 
            dialogUpdateOpen: true, 
            dialogCancelButtonText: "Cancel", 
            dialogConfirmButtonText: "Confirm", 
            dialogLabel: "Task...", 
            dialogMessage: `Actual task: ${task.taskDescription}`, 
            dialogTitle: "Update task",
            taskToWork: task 
        })
    }

    private handleDeleteModalOpen = (task: TaskEntity) => {
        this.setState({
            dialogUpdateOpen: true, 
            dialogCancelButtonText: "Cancel", 
            dialogConfirmButtonText: "Remove", 
            dialogLabel: "", 
            dialogMessage: "Would you remove this task?", 
            dialogTitle: "Remove task",
            taskToWork: task
        });
    }

    private handleConfirmDialog = () => {

        if (this.state.dialogLabel === "") {
            this.props.handleDeleteTask(this.state.taskToWork.id);
        }else{            
            this.state.taskToWork.taskDescription = this.props.task;
            this.props.handleUpdateTask(this.state.taskToWork);
        }

        this.setState({ dialogUpdateOpen: false, taskToWork: null });
    }

    private handleCancelDialog = () => {
        this.setState({ dialogUpdateOpen: false, taskToWork: null });        
    }

    private handleCheckboxUpdateValue = (task: TaskEntity, newStatus: boolean) => {
        
        task.status = newStatus;
        this.state.taskToWork = task;
        this.props.handleUpdateTask(this.state.taskToWork);

    }

    render() {

        const {
            dialogUpdateOpen,
            dialogCancelButtonText,
            dialogConfirmButtonText,
            dialogLabel,
            dialogMessage,
            dialogTitle,
            taskToWork

        } = this.state;

        const { tasks, task } = this.props;

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <form className="w-100" onSubmit={this.props.handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'initial', width: 'auto', mt: 2, mx: 2 }}>
                        <TextField id='task' name='task' value={task} onChange={this.props.handleChange} label="Type here your new task" fullWidth sx={{ mr: 1 }} />
                        <Button className="" type="submit" variant="contained" color="primary">
                            <Plus fontSize={30} fontWeight={800} />
                        </Button>
                    </Box>
                </form>


                <Box sx={{ display: 'flex', flexDirection: 'column', height: 475, overflow: 'auto', my: 5 }}>
                    <List>
                        {
                            tasks.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Checkbox onClick={() => this.handleCheckboxUpdateValue(item, !item.status)} checked={item.status} value={item.status} color="secondary" />
                                        </ListItemIcon>
                                        <TaskTextComponent text={item.taskDescription} />
                                    </ListItemButton>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 5 }}>
                                        <IconButton onClick={() => this.handleDeleteModalOpen(item)}>
                                            <Delete color="secondary" />
                                        </IconButton>
                                        <IconButton onClick={() => this.handleUpdateModalOpen(item)}>
                                            <Edit color="secondary" />
                                        </IconButton>
                                    </Box>
                                </ListItem>
                            ))}
                    </List>
                </Box>
                <DialogFormComponent
                    propsOpen={dialogUpdateOpen}
                    taskId={this.state.taskToWork !== null ? this.state.taskToWork.id : 0}
                    handleConfirm={this.handleConfirmDialog}
                    handleCancel={this.handleCancelDialog}
                    dialogButtonCancelText={dialogCancelButtonText}
                    dialogButtonConfirmText={dialogConfirmButtonText}
                    dialogLabel={dialogLabel}
                    dialogMessage={dialogMessage}
                    dialogTitle={dialogTitle}
                    handleChange={this.props.handleChange}                    

                />
            </Box>
        )
    }

}