import { Avatar, Box, Button, Paper, TextField } from "@mui/material";
import { DatePicker, DesktopDatePicker } from "@mui/x-date-pickers";
import React from "react";
import ResponsiveAppBar from "../../shared/views/components/app-bar-component";
import { ContainerForm } from "./style";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'; 
import { ContainerScreen } from "../../shared/views/components/styled";
import UserEntity from "../../shared/models/user-model";

interface Props{
    user?: UserEntity | undefined;
    handleChange: any;
    handleSubmit: any;
}

export default class UserView extends React.Component<Props> {
    render() {        

        const { handleChange } = this.props;

        if(this.props.user){
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ContainerScreen className="vh-100">
                    <ResponsiveAppBar user={this.props.user} height={200} />
                    <Box sx={{
                        display: 'flex',
                        '& > :not(style)': {

                            width: '80%',
                            height: 600,
                            position: 'absolute',
                            top: 150,
                            left: '10%'
                        }
                    }}>
                        <Paper elevation={5} sx={{ paddingBottom: 3 }}>
                            <ContainerForm>
                                <Avatar sx={{
                                    width: 120,
                                    height: 120,
                                    position: 'absolute',
                                    top: -60,
                                    boxShadow: 10
                                }} src={this.props.user.profileImageUrl} />
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { width: '50%', marginTop: 4 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        flexDirection: 'column',
                                        marginTop: 10,
                                        width: '100%'
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField
                                        disabled
                                        fullWidth
                                        required
                                        id="firstName"
                                        label="First Name"
                                        defaultValue={this.props.user.firstName}
                                    />
                                    <TextField
                                        disabled
                                        fullWidth
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        defaultValue={this.props.user.lastName}
                                    />
                                    <TextField
                                        disabled
                                        id="email"
                                        label="Email"
                                        defaultValue={this.props.user.email}
                                    />                                    
                                    <DesktopDatePicker                                                                                
                                        format="DD/MM/YYYY"
                                        label="Birthday"
                                        defaultValue={dayjs(dayjs.unix(this.props.user.birthday).format('YYYY-MM-DD'))}
                                        onChange={(newDate) => {
                                            handleChange(dayjs(newDate).format('DD/MM/YYYY'));
                                        }}
                                    />
                                    <div>                                        
                                        <Button sx={{ m: 3 }} variant="contained" color="primary">Cancel</Button>
                                        <Button sx={{ m: 3 }} variant="contained" onClick={this.props.handleSubmit} type="submit" color="secondary">Save</Button>
                                    </div>
                                </Box>
                            </ContainerForm>
                        </Paper>
                    </Box>
                </ContainerScreen>
            </LocalizationProvider>
        );}else{
            return(
                <></>
            )
        }
    }
}