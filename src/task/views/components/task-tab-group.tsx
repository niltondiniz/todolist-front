import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TaskEntity from "../../models/entities/task-entity";
import TaskComponent from "./task-component";

interface Props{
    firstTabDescription: string;
    secondTabDescription: string;
    tasks: TaskEntity[];
}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        const { firstTabDescription, secondTabDescription } = this.props;
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="new" title={firstTabDescription}>                                            
                    {
                        this.props.tasks.filter(task => task.status == true).map((task) => {
                            return <TaskComponent taskDescription={task.description} checked={task.status} key={task.id} />
                        })
                    }
                </Tab>
                <Tab eventKey="done" title={secondTabDescription}>
                    {
                        this.props.tasks.filter(task => task.status == false).map((task) => {
                            return <TaskComponent taskDescription={task.description} checked={task.status} key={task.id} />
                        })
                    }
                </Tab>                                        
            </Tabs>
        )
    }
}