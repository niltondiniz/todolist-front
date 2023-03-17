import React from "react";
import TaskEntity from "../models/entities/task-entity";
import TaskTabGroup from "../views/components/task-tab-group";


interface Props{
    userId: number;
}

interface State{
    tasks: TaskEntity[];
}

export default class TaskController extends React.Component<Props, State>{
    
    constructor(props: Props){
        super(props);
        this.state = {tasks: null};
    }

    private getTasks(): void{
        var tasks: TaskEntity[] = [];
        tasks.push(new TaskEntity(true, 'Teste de tarefa', 12345));
        tasks.push(new TaskEntity(true, 'Teste de tarefa', 12345));
        tasks.push(new TaskEntity(true, 'Teste de tarefa', 12345));

        tasks.push(new TaskEntity(false, 'Teste de tarefa', 12345));
        tasks.push(new TaskEntity(false, 'Teste de tarefa', 12345));
        tasks.push(new TaskEntity(false, 'Teste de tarefa', 12345));
        this.setState({tasks: tasks});
    }

    componentDidMount(): void {
        this.getTasks();
    }

    render(){
        return <TaskTabGroup 
                    firstTabDescription="Novas Tarefas" 
                    secondTabDescription="Tarefas Concluídas"
                    tasks={this.state.tasks}
                /> 
    }
    
}