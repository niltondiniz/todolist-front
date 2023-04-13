import getUserFromCookies from "./get-user-from-cookies-util";

export default function isAutenticated(): boolean{
    if(getUserFromCookies() === undefined){
        console.log('Não autenticado');
    }else{
        console.log('Autenticado');
    }
    return getUserFromCookies() !== undefined;
}