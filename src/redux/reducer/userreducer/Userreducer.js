import { USER_MANAGE_ERROR, USER_MANAGE_LOADING, USER_MANAGE_SUCCESS, USER_MANAGE_ERROR1, USER_MANAGE_LOADING1, USER_MANAGE_SUCCESS1 } from "../../types"


const initialState = {
    usermanage: [],
    loading: false,
    error: false,
    createusers: []
}


const UserMangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_MANAGE_LOADING:
            return {

                error: false,
                loading: true
            }
        case USER_MANAGE_SUCCESS:
            return {
                ...state,
                error: false,
                usermanage: action.payload,
                loading: false
            }
        case USER_MANAGE_ERROR:
            return {

                error: action.payload,
                usermanage: [],
                loading: false
            }

        case USER_MANAGE_LOADING1:
            return {
                error: false,
                loading: true
            }
        case USER_MANAGE_SUCCESS1:
            return {
                ...state,
                error: false,
                usermanage: action.payload,
                loading: false
            }
        case USER_MANAGE_ERROR1:
            return {
                error: action.payload,
                usermanage: [],
                loading: false
            }
        default:
            return state;
    }
}


export default UserMangeReducer;