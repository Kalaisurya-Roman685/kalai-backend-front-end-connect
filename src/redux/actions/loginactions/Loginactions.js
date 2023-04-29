
import { LoginUser } from '../../../services/loginservice/login-service';
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from './../../types';


export const LoginActionData = (data, history, toast) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_LOADING })
    try {

        const loginresponse = await LoginUser(data);

        console.log(loginresponse,"loginresponse")
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
        dispatch({
            type: LOGIN_USER_ERROR,
            error: true
        })
    }
}


