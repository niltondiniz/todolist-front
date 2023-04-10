import React from "react";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import UserView from "../views/user-view";

export default class UserController extends React.Component{
    render(){
        return (
            <UserView user={getUserFromCookies()} />
        )
    }
}