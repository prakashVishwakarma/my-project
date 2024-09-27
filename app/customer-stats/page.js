'use client'
import { Typography } from "@mui/material";
import ResponsiveDrawer from "../component/Sidebar";
import BasicCard from "../component/card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:8080/users`)
      if (response?.status === 200) {
        setData(response?.data)
      }
      console.log(response)
    }
    getUsers()
  }, [])

  return <ResponsiveDrawer >
    <div className="flex flex-wrap justify-center  " >
      <BasicCard data={{ name: 'Rotal Customers', delete: true, totalUser: data?.length }} />
      <BasicCard recent={ data}  data={{ sirName: 'Recently Added', delete: true}} />
    </div>
  </ResponsiveDrawer>
}