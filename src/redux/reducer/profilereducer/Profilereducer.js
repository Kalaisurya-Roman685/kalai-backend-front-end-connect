

const initialState = {
    users: [],
    loading: false,
    error: false,

}


const UserProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "USER_LOADING":
            return {
                users: [],
                loading: true,
                error: false
            }
        case "USER_SUCCESS":
            return {
                ...state,
                users: action.payload,
                loading: true,
                error: false
            }
        case "USER_ERROR":
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default: {
            return state;
        }
    }


}


export default UserProfileReducer;