import { UserMange, UserMangeCreateNew, UserMangeDeletes, UserMangeEdit } from "../../../services/userservices/usermanage-services";
import { USER_MANAGE_ERROR, USER_MANAGE_LOADING, USER_MANAGE_SUCCESS, USER_MANAGE_ERROR1, USER_MANAGE_LOADING1, USER_MANAGE_SUCCESS1 } from "../../types"


export const UserMangeActions = (data) => async (dispatch) => {
    dispatch({ type: USER_MANAGE_LOADING });

    try {
        const response = await UserMange();
        dispatch({
            type: USER_MANAGE_SUCCESS,
            payload: response?.data
        })
    }
    catch (err) {
        dispatch({
            type: USER_MANAGE_ERROR,
            payload: true
        })
    }
}


export const UserMangeCreate = (data, toast, history, handleClose) => async (dispatch) => {
    dispatch({ type: USER_MANAGE_LOADING1 });

    try {
        await UserMangeCreateNew(data);
        setTimeout(() => {
            history.push("/home");
        }, 400);
        toast.success("User Created...")
    }
    catch (err) {




        toast.error(err?.response?.data);
       


    }
}



export const UserMangeDelete = (data, toast, history, handleClose) => async (dispatch) => {
    dispatch({ type: USER_MANAGE_LOADING1 });

    try {
        await UserMangeDeletes(data);
        setTimeout(() => {
            window.location.reload(false);
        }, 400);
        toast.success("User Deleted...")
    }
    catch (err) {
        dispatch({
            type: USER_MANAGE_ERROR1,
            payload: true
        })


    }
}



export const UserMangeEditData = (id, data, toast, history) => async (dispatch) => {
    dispatch({ type: USER_MANAGE_LOADING1 });

    try {
        await UserMangeEdit(id, data);
        setTimeout(() => {
            history.push("/home");
        }, 400);
        toast.success("User Updated...")
    }
    catch (err) {
        dispatch({
            type: USER_MANAGE_ERROR1,
            payload: true
        })


    }
}