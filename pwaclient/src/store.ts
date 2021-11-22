import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './reducers/CounterSlice';
import UserSlice from './reducers/UserSlice';

export const store=configureStore({
    reducer:{
        counter:CounterSlice,
        user:UserSlice
    }
})

export type rootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
