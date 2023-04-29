import axiosConfig from "../../configurl/Baseurl";





export function LoginUser(data) {
    console.log(data,"data")
    return new Promise((resolve, reject) => {
        axiosConfig.post(`/auth/login`, data).then(res => {
         resolve(res);
        }).catch(err => {
          reject(err);
        })
    })
}