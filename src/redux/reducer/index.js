import { combineReducers } from "redux";
import LoginActionUser from "./loginreducer/Loginreducer";
import UserMangeReducer from "./userreducer/Userreducer";
import UserProfileReducer from "./profilereducer/Profilereducer";


const Rootreducer = combineReducers({
    login: LoginActionUser,
    userdata: UserMangeReducer,
    users: UserProfileReducer
});


export default Rootreducer;