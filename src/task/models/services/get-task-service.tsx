export default async function getTasksService(userId: number){
    const result = await fetch(`http://localhost:3010/task/user/${userId}`,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }
    );

    const tasks = await result.json();    
    return tasks;
}