export async function DeleteTaskService(id: number) {
    const result = await fetch(`http://localhost:3010/task/${id}`,
        {
            method: 'DELETE',
            headers: {
                'accept': 'application/json'
            }
        }
    );

    return await result.status;
}