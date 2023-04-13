import React from "react";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import UserView from "../views/user-view";
import UserEntity from "../../shared/models/user-model";
import UpdateUserService from "../models/services/update-user-service";
import ConvertStringDateToTimestamp from "../../shared/utils/convert-string-date-to-timestamp";
import GetUserDataService from "../models/services/get-user-data-service";

interface Props{
    
}

interface State{
    user: UserEntity;
}

export default class UserController extends React.Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = { user: undefined }
    }

    handleChange = (newDate) => {        
        var convertedDate = ConvertStringDateToTimestamp(newDate);
        var user = this.state.user;        
        user.birthday = convertedDate;
        this.setState({ user: user } as Pick<State, keyof State>);
    }

    async handleUpdateUser() {        
        const { user } = this.state;
        const updatedUser = await UpdateUserService(user);
        if(updatedUser){
            this.getUserData();
        }
    }

    async getUserData(){
        var userFromCookies = getUserFromCookies();        
        const user = await GetUserDataService(userFromCookies.id);
        this.setState({user: user});
    }

    componentDidMount(): void {        
        this.getUserData();
    }

    render(){
        const { user } = this.state;
        return (
            <UserView handleSubmit={() => this.handleUpdateUser()}  handleChange={this.handleChange} user={user} />
        )
    }
}

