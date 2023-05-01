
import { LoginSignup, LoginUser, RemoveUserDb } from '../../../services/loginservice/login-service';
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from './../../types';


export const LoginActionData = (data, history, toast) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_LOADING })
    try {

        const loginresponse = await LoginUser(data);
        localStorage.setItem("userId", JSON.stringify(loginresponse?.data?.id));
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: loginresponse
        });

        toast.success("Login User Successfully!!");
        setTimeout(() => {
            history.push("/home")
        }, 1300);

    }
    catch (err) {

        toast.error(err?.response?.data?.message);
        dispatch({
            type: LOGIN_USER_ERROR,
            error: true
        })
    }
}




export const UserSignup = (data, history, toast) => async (dispatch) => {

    try {

        await LoginSignup(data);

        toast.success("Signup User Successfully!!");
        setTimeout(() => {
            history.push("/")
        }, 1300);

    }
    catch (err) {
        toast.error(err?.response?.data?.message)
    }
}



export const UserRemoveDb = (data, history, toast) => async (dispatch) => {

    try {

        await RemoveUserDb(data);
        toast.success("User Remove Successfully ");
        setTimeout(() => {
            history.push("/")
        }, 1300);

    }
    catch (err) {
        toast.error(err?.response?.data?.message)
    }
}