import { UserGet, UserUpdate } from "../../../services/profileservices/profile-services";

export const UserActions = () => async (dispatch) => {

    dispatch({ type: "USER_LOADING" })
    try {
        const getuserid = localStorage.getItem("userId");
        const loginresponse = await UserGet(JSON.parse(getuserid));
        dispatch({
            type: "USER_SUCCESS",
            payload: loginresponse?.data
        });
    }
    catch (err) {
        dispatch({
            type: "USER_ERROR",
            error: true
        })
    }
}


export const UserUpdateActions = (id, data, toast, handleClose) => async (dispatch) => {

    dispatch({ type: "USER_LOADING_PROFILE" })
    try {
        const loginresponse = await UserUpdate(id, data);
        setTimeout(() => {
            handleClose();
            window.location.reload(false);
        }, 500);


        toast.success("User Profile Updated...")
        dispatch({
            type: "USER_PROFILE_SUCCESS",
            payload: loginresponse?.data
        });
    }
    catch (err) {
        dispatch({
            type: "USER_PROFILE_ERROR",
            error: true
        })
    }
}