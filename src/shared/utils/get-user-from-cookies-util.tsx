import UserModel from "../models/user-model";
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";

export default function getUserFromCookies(): UserModel | undefined {

    const token = Cookies.get('access_token');

    if (token !== undefined) {
        const decodedToken = jwtDecode(token);
        var user = new UserModel();

        user.id = decodedToken['id'];
        user.email = decodedToken['email'];
        user.firstName = decodedToken['firstName'];
        user.lastName = decodedToken['lastName'];
        user.profileImageUrl = decodedToken['profileImageUrl'];
        user.birthday = decodedToken['birthday'];

        return user;
    }else{
        return undefined;
    }
}