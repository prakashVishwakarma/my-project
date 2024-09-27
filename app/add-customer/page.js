'use client'
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncThunkAddUsers } from "@/store/createAsyncThunk";

export default function Form() {

  const [data, setData] = useState({})
  const dispatch = useDispatch();

  const router = useRouter()

  const handleChangeInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClickAdd = async () => {
    dispatch(asyncThunkAddUsers(data)).then(res=>{

      console.log('res1',res?.meta?.arg?.name)
      if(!res?.meta?.arg?.name) return
        router.push('/')
    })
    // const response = await axios.post(`http://localhost:8080/users`,data)
    // if (response?.status === 201){
    // }
  }

  return <>
    <form>
      <div className="flex justify-center items-center h-screen">

        <div className="flex flex-col  w-1/2 bg-blue-100 h-1/2 p-9">

          <TextField name='name' onChange={(e) => { handleChangeInput(e) }} className="mt-8" label="name" variant="standard" />
          <TextField name='sirName' onChange={(e) => { handleChangeInput(e) }} label="sir name" variant="standard" />
          <TextField name='location' onChange={(e) => { handleChangeInput(e) }} label="location" variant="standard" />
          <Button onClick={() => handleClickAdd()} className="mt-8" size="small">Add</Button>
        </div>
      </div>
    </form>
  </>
}