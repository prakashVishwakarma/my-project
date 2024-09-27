import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUsaer } from "../store/slices/userSlice";


export const asyncThunkUsers = createAsyncThunk("post/asyncThunkUsers", async (payload, { dispatch }) => {
    await axios.get(`http://localhost:8080/users`)
        .then(res => {
            console.log('res###',res)
            if (res?.status !== 200) return
            dispatch(fetchUsaer(res?.data))
        }).catch(err => {
            console.error(err)
            dispatch(fetchUsaer([]))
            console.error(err);
        })
})

export const asyncThunkAddUsers = createAsyncThunk("post/asyncThunkAddUsers", async (payload, { dispatch }) => {
    await axios.post(`http://localhost:8080/users`,payload)
        .then(() => {
        }).catch(err => {
            console.error(err)
            dispatch(fetchUsaer([]))
            console.error(err);
        })
})