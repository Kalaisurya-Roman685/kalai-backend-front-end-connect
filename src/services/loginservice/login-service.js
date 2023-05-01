import axiosConfig from "../../configurl/Baseurl";





export function LoginUser(data) {

  return new Promise((resolve, reject) => {
    axiosConfig.post(`/auth/login`, data).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}




export function LoginSignup(data) {

  return new Promise((resolve, reject) => {
    axiosConfig.post(`/auth/register`, data).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}


export function RemoveUserDb(id) {

  return new Promise((resolve, reject) => {
    axiosConfig.delete(`/auth/delete/${id}`).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}