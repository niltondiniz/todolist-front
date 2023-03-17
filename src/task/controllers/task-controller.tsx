import React from "react";
import TaskEntity from "../models/entities/task-entity";
import TaskFormComponent from "../views/components/task-form-component";
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

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Vai add task');
        
        /*const userModel = {name: this.state.name, email: this.state.email, message: this.state.message} as UserModel;
        postUserData(userModel)
        .then(response => {
        
          if(response.status == 201){
            this.setState({name: this.state.name, email: this.state.email, message: this.state.message, formSent: true})
          }
    
        });*/
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
        return (
        <div>
            <TaskFormComponent handleSubmit={this.handleSubmit} /> 
            <TaskTabGroup 
                    firstTabDescription="Novas Tarefas" 
                    secondTabDescription="Tarefas Concluídas"
                    tasks={this.state.tasks}
                /> 
        </div>
        )
        
    }
    
}