import { LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../../types";


const initialState = {
    loginNewUser: [],
    error: false,
    loading: false,
};



const LoginActionUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_LOADING:
            return {
                loginNewUser: [],
                loading: true
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginNewUser: action.payload,
                loading: true,
                error: false
            }

        case LOGIN_USER_ERROR:

            return {

                loginNewUser: [],
                loading: false,
                error: true
            }
        default:
            return state;
    }
}


export default LoginActionUser;