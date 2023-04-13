import React from "react";
import { TaskEntity, User } from "../models/entities/task-entity";
import TaskView from "../views/task-view";
import CreateTaskService from "../models/services/create-task-service";
import getTasksService from "../models/services/get-task-service";
import { DeleteTaskService } from "../models/services/delete-task-service";
import UpdateTaskService from "../models/services/update-task-service";
import { ThirtyFpsSelect } from "@mui/icons-material";


interface Props {
    userId: number;
}

interface State {
    tasks: TaskEntity[];
    task: string;
}

export default class TaskController extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = { tasks: [], task: '' };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value } as Pick<State, keyof State>);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { tasks, task } = this.state;

        if (task !== "") {
            const date = Date.now();
            var user = new User();

            user.id = this.props.userId;

            var newTask = new TaskEntity(false, task, date, user);

            const createdTask = await CreateTaskService(newTask);
            tasks.push(createdTask);
            this.setState({ tasks: tasks, task: '' });
        }

    }

    handleDeleteTask = async (taskId) => {
        const deleteResult = await DeleteTaskService(taskId);
        if (deleteResult === 200) {
            this.setState({ tasks: this.state.tasks.filter(task => task.id !== taskId) });
        } else {
            alert('Ocorreu um erro ao excluir a tarefa');
        }
    }

    handleUpdateTask = async (task: TaskEntity) => {

        const updateResult = await UpdateTaskService(task);
        if (updateResult) {
            this.getTasks();
        } else {
            alert('Ocorreu um erro ao editar a tarefa');
        }
    }

    private async getTasks(): Promise<void> {
        var tasks: TaskEntity[] = [];
        tasks = await getTasksService(this.props.userId);
        this.setState({ tasks: tasks });
    }

    componentDidMount(): void {
        this.getTasks();
    }

    render() {

        const { task, tasks } = this.state;

        return (
            <TaskView
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                task={task}
                tasks={tasks}
                handleDeleteTask={this.handleDeleteTask}
                handleUpdateTask={this.handleUpdateTask}
            />
        )

    }

}