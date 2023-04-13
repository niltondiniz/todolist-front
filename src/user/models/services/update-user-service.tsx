import UserEntity from "../../../shared/models/user-model";


export default async function UpdateUserService(user: UserEntity): Promise<UserEntity> {    
    const result = await fetch(`http://localhost:3010/user/${user.id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
    );

    const updatedTask = await result.json() as UserEntity;
    return updatedTask;
}