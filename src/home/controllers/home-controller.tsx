import React from "react";
import TaskEntity from "../../task/models/entities/task-entity";
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
            <HomeView></HomeView>
        )
    }
}