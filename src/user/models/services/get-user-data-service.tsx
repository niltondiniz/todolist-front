import UserEntity from "../../../shared/models/user-model";


export default async function GetUserDataService(userId: number): Promise<UserEntity> {    
    const result = await fetch(`http://localhost:3010/user/${userId}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'                
            }            
        }
    );

    const user = await result.json() as UserEntity;
    return user;
}