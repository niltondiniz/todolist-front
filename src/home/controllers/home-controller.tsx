import React from "react";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import HomeView from "../views/home-view";




interface Props {

}

interface State {
    
}

export default class HomeController extends React.Component<Props, State>{

    

    render() {
        return (
            <HomeView user={getUserFromCookies()} />
        )
    }
}
