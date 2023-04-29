import { configureStore } from '@reduxjs/toolkit'
import Rootreducer from './../reducer/index';

const store = configureStore({
    reducer:Rootreducer
        

});


export default store;