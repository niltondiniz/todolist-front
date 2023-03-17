export default class TaskEntity {
    id: number;
    status: boolean;    
    description: string;
    createDate: number;

    constructor(status: boolean, description: string, createDate: number){
        this.status = status;
        this.description = description;
        this.createDate = createDate;
    }
}