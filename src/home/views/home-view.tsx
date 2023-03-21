import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import React from "react";
import { Plus } from "react-bootstrap-icons";
import ResponsiveAppBar from "./components/app-bar-component";
import { ContainerTask } from "./style";


export default class HomeView extends React.Component{
    render(){        
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
                                <Box sx={{ display: 'flex', width: 'auto', mb: 5, mx: 2 }}>
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
                                            { id: 1, text: 'Dar banho no cachorro' },
                                            { id: 1, text: 'Levar o carro no mecânico' },
                                            { id: 2, text: 'Ligar para construtora' },
                                            { id: 3, text: 'Agendar consulta para dia 19/06' },
                                            { id: 1, text: 'Dar banho no cachorro' },
                                            { id: 1, text: 'Levar o carro no mecânico' },
                                            { id: 2, text: 'Ligar para construtora' },
                                            { id: 3, text: 'Agendar consulta para dia 19/06' },
                                            { id: 1, text: 'Dar banho no cachorro' }
                                        ].map((item) => (
                                        <ListItem key={item.id} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                <Checkbox color="secondary" />
                                                </ListItemIcon>
                                                <ListItemText disableTypography style={{fontSize: 25, fontFamily: 'Roboto', color: '#404040'}} primary={item.text} />
                                            </ListItemButton>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton>
                                                <Delete color="secondary" />
                                                </IconButton>
                                                <IconButton>
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
            </div>
        )
    }
}