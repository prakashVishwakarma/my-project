'use client'
import ResponsiveDrawer from "../component/Sidebar";
import BasicCard from "../component/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkUsers } from "@/store/createAsyncThunk";

export default function Page() {

  const [data, setData] = useState([])
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users?.data);

  useEffect(() => {
    dispatch(asyncThunkUsers())
    setData(userData)
  }, [])

  return <ResponsiveDrawer >
    <div className="flex flex-wrap justify-center  " >
      <BasicCard data={{ name: 'Total Customers', delete: true, totalUser: data?.length }} />
      <BasicCard recent={ data}  data={{ sirName: 'Recently Added', delete: true}} />
    </div>
  </ResponsiveDrawer>
}