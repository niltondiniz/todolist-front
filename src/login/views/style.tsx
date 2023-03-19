import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFCC99;
`

export const VerticalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    
    .social-button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 7px;
        width: 230px;
        height: 55px;
        color: white;
        font-size: 90%;
        font-weight: 600;
        padding-left: 16px;
        padding-right: 32px;
        margin-bottom: 15px;        
    }

    .facebook-color{
        background-color: #4267B2;
    }

    .google-color{
        background-color: #DB4437;
    }

    .twitter-color{
        background-color: #1DA1F2;
    }    
`

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    

    .space{
        display: flex;
        align-items: center;
        justify-content: center;            
        width: 200px;        
    }

    .vertical-line{
        height: 200px;
        width: 1px;
        background-color: black;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;   
    flex-direction: column; 
    height: 300px;   

    img {
        width: 170px;
    }
`

export const TaskMeText = styled.div`
    width: auto;
    height: 50px;
    font-size: 3.0em;    
    font-weight: 600;
    margin-bottom: 2rem;
`