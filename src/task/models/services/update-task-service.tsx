import {TaskEntity} from "../entities/task-entity";

export default async function UpdateTaskService(task: TaskEntity): Promise<TaskEntity> {
    const result = await fetch(`http://localhost:3010/task/${task.id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
    );

    const updatedTask = await result.json() as TaskEntity;
    return updatedTask;
}