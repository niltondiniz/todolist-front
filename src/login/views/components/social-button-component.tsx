import React from "react";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";

interface Props {
    type: string;
}

interface State {

}
export default class SocialButton extends React.Component<Props, State>{
    render(): React.ReactNode {

        const { type } = this.props;

        if(type === 'facebook'){
            return (
                <>  
                    <a href="#">
                        <div className="social-button facebook-color">
                            <Facebook/>
                            <span>Login with Facebook</span>
                        </div>
                    </a>
                </>
            )
        }

        if(type === 'twitter'){
            return (
                <>              
                    <a href="#">
                        <div className="social-button twitter-color">
                            <Twitter/>
                            <span>Login with Twitter</span>
                        </div>
                    </a>  
                </>
            )
        }

        if(type === 'google'){
            return (
                <>            
                    <a href="#">
                        <div className="social-button google-color">
                            <Google/>
                            <span>Login with Google</span>
                        </div>
                    </a>
                </>
            )
        }
    }
}