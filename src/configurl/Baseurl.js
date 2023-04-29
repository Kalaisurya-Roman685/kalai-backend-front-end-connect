import axios from "axios";


const baseurlset=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})

// axios.interceptors.request.use(function (config) {

//     config.url = process.env.REACT_APP_BASE_URL + config.url;

//     console.log(process.env.REACT_APP_BASE_URL,"config")

//     return config;
// }, function (error) {

//     return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {

//     return response;
// }, function (error) {

//     return Promise.reject(error);
// });


const axiosConfig = baseurlset;


export default axiosConfig;