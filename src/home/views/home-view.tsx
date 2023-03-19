import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, Paper, TextField } from "@mui/material";
import React from "react";
import { Plus } from "react-bootstrap-icons";
import { ContainerTask } from "./style";


export default class HomeView extends React.Component{
    render(){
        return(
            <>
                <ContainerTask className="vh-100">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 900,
                            height: 500,
                            },
                        }}
                    >
                        <Paper>
                            
                                <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', overflow: 'scroll', height: 470 }}>
                                    <Box sx={{ display: 'flex', width: 'auto', mb: 2, mx: 2 }}>
                                        <TextField label="New Task" fullWidth sx={{ mr: 1 }} />
                                        <Button variant="contained">
                                            <Plus fontSize={30} fontWeight={800}/>
                                        </Button>
                                    </Box>
                                    <hr></hr>
                                    <List>
                                    {
                                        [
                                            { id: 1, text: 'Item 1' }, 
                                            { id: 2, text: 'Item 2' }, 
                                            { id: 3, text: 'Item 3' },
                                            { id: 1, text: 'Item 1' }, 
                                            { id: 2, text: 'Item 2' }, 
                                            { id: 3, text: 'Item 3' },
                                            { id: 1, text: 'Item 1' }, 
                                            { id: 2, text: 'Item 2' }, 
                                            { id: 3, text: 'Item 3' }
                                        ].map((item) => (
                                        <ListItem key={item.id} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                            <Checkbox />
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton>
                                            <Delete />
                                            </IconButton>
                                            <IconButton>
                                            <Edit />
                                            </IconButton>
                                        </Box>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Box>
                            
                        </Paper>
                    </Box>
                </ContainerTask>
            </>
        )
    }
}