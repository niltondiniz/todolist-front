import {TaskEntity} from "../entities/task-entity";

export default async function CreateTaskService(task: TaskEntity): Promise<TaskEntity> {
    const result = await fetch(`http://localhost:3010/task`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
    );

    const createdTask = await result.json() as TaskEntity;
    console.log(createdTask);
    return createdTask;
}