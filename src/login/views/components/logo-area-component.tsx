import { LogoContainer, TaskMeText, VerticalContainer } from "../style";
import logo from '../../../assets/logo.png';
import { SelfImprovement } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function LogoArea(){
    return (                   
            <LogoContainer>
                <SelfImprovement color='secondary' sx={{fontSize: 150}}/>
                <Typography variant="h6" sx={{                                
                        fontFamily: 'Roboto',

                        fontWeight: 500,              
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                >
                    Organize.Me
                </Typography>
            </LogoContainer>
        
    )
}