'use client'
import ResponsiveDrawer from "@/app/component/Sidebar";
import BasicCard from "@/app/component/card";
import { Button } from "@mui/material";
import Link from "next/link";
import { Fragment, Key, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkUsers } from "@/store/createAsyncThunk";

export default function Home() {

  const userData = useSelector((state: any) => state.users?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userData)
    dispatch(asyncThunkUsers())
  }, [])

  return (
    <ResponsiveDrawer >
      <Link href={"add-customer"}><Button variant="outlined">Add</Button></Link>
      <div className="flex flex-wrap justify-center  " >
        {
          userData?.length !== 0 ?
            userData?.map((value: any, i: Key | null | undefined) => {
              return (<Fragment key={i}>
                <BasicCard data={value} recent={undefined} />
              </Fragment>)
            })
            :
            <h1>please add the user</h1>
        }
      </div>
    </ResponsiveDrawer>
  );
}
