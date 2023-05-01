import axiosConfig from "../../configurl/Baseurl";



export function UserGet(data) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/auth/user/${data}`).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}


export function UserUpdate(id, data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/auth/user/update/${id}`, data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}