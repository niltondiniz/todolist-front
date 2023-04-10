import React from "react";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import {TaskEntity} from "../../task/models/entities/task-entity";
import HomeView from "../views/home-view";


interface Props{

}

interface State{
    todoList: TaskEntity[];
}

export default class HomeController extends React.Component<Props, State>{
    
    constructor(props){
        super(props);
        this.state = {todoList: []}
    }

    render(){
        return(
            <HomeView user={getUserFromCookies()}/>
        )
    }
}