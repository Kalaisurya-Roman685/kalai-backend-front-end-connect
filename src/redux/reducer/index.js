import { combineReducers } from "redux";
import LoginActionUser from "./loginreducer/Loginreducer";


const Rootreducer = combineReducers({
    login: LoginActionUser
});


export default Rootreducer;