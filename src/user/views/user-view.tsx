import { Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, StaticDatePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import React from "react";
import ResponsiveAppBar from "../../shared/views/components/app-bar-component";
import { ContainerForm } from "./style";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { ContainerScreen } from "../../shared/views/components/styled";


export default class UserView extends React.Component {
    render() {
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ContainerScreen className="vh-100">
                    <ResponsiveAppBar height={200} />
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
                                }} src="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg" />
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
                                        fullWidth
                                        required
                                        id="firstName"
                                        label="First Name"
                                        defaultValue="Nilton"
                                    />
                                    <TextField
                                        fullWidth
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        defaultValue="Diniz"
                                    />
                                    <TextField
                                        disabled
                                        id="email"
                                        label="Email"
                                        defaultValue="niltondiniz@niltondiniz.com"
                                    />
                                    <DesktopDatePicker
                                        label="Birthday"
                                        defaultValue={dayjs('2022-04-17')}
                                    />
                                    <div>                                        
                                        <Button sx={{ m: 3 }} variant="contained" type="submit" color="primary">Cancel</Button>
                                        <Button sx={{ m: 3 }} variant="contained" type="submit" color="secondary">Save</Button>
                                    </div>
                                </Box>
                            </ContainerForm>
                        </Paper>
                    </Box>
                </ContainerScreen>
            </LocalizationProvider>
        );
    }
}