'use client'
import { TextField } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncThunkAddUsers } from "@/store/createAsyncThunk";
import SharedButton from "@/app/component/SharedComponent/Button";
import ResponsiveDrawer from "../component/Sidebar";

export default function Form() {

  const [data, setData] = useState({})
  const dispatch = useDispatch();

  const router = useRouter()

  const handleChangeInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClickAdd = async () => {
    if (data?.name && data?.sirName && data?.location) {

      dispatch(asyncThunkAddUsers(data)).then(res => {
        if (!res?.meta?.arg?.name) return
        router.push('/')
      })
    } else {
      alert('Please fill all the fields')
    }
  }

  return <>
    <ResponsiveDrawer>
      <form>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col w-11/12 md:w-1/2 bg-blue-100 h-1/2 p-9 rounded-2xl">
            <TextField name='name' onChange={(e) => { handleChangeInput(e) }} className="mt-8" label="name" variant="standard" />
            <TextField name='sirName' onChange={(e) => { handleChangeInput(e) }} label="sir name" variant="standard" />
            <TextField name='location' onChange={(e) => { handleChangeInput(e) }} label="location" variant="standard" />
            <SharedButton onClick={() => handleClickAdd()} />
            {/* <Button onClick={() => handleClickAdd()} className="mt-8" size="small">Add</Button> */}
          </div>
        </div>
      </form>
    </ResponsiveDrawer>
  </>
}