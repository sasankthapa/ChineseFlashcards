import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './reducers/CounterSlice';

export const store=configureStore({
    reducer:{
        counter:CounterSlice
    }
})

export type rootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
