export class TaskEntity {
    id: number;
    status: boolean;    
    taskDescription: string;
    createDate: number;
    user: User;

    constructor(status: boolean, description: string, createDate: number){
        this.status = status;
        this.taskDescription = description;
        this.createDate = createDate;
    }
}

export class User{
    id: number;
}