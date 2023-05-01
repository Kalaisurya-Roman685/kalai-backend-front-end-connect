import axiosConfig from "../../configurl/Baseurl";



export function UserMange() {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/users/allusers`).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function UserMangeCreateNew(data) {
    return new Promise((resolve, reject) => {
        axiosConfig.post(`/users/create`, data).then((res) => {
            resolve(res);
        }).catch((err) => {
       
            return reject(err);
        })
    })
}



export function UserMangeDeletes(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.delete(`/users/delete/${id}`).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}




export function UserMangeEdit(id,data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/users/update/${id}`,data).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function UserMangeSingleUser(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/users/getuser/${id}`).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}