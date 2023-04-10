export default async function getTasksService(userId: number){
    const result = await fetch(`http://localhost:3010/task/user/${userId}`,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }
    );

    const obj = await result.json();
    const tasks = obj;
    console.log(tasks);
    return tasks;
}