import { GitHub } from "@mui/icons-material";
import React, { ReactNode } from "react";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import GetButtonByType from "./get-button-by-type-component";

interface Props {
    type: string;
    text: string;
}

interface State {

}
export default class SocialButton extends React.Component<Props, State>{

    render(): React.ReactNode {

        const { type, text } = this.props;        
        return (
            <>  
                <Link to="/home/">
                    <div className={`social-button ${type}-color`}>
                        <GetButtonByType type={type}/>
                        <span>{text}</span>
                    </div>
                </Link>
            </>
        )
        
    }
}