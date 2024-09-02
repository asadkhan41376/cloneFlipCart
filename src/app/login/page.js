"use client"
import { Box, Button } from '@mui/material'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const page = () => {
    const {handleSubmit,control} = useForm()


    const onsubmit=async(data)=>{
try {
    const response = await axios.post('https://dummyjson.com/user/login',data)
    // console.log("csdsd",response.data.token);
    
    if(response.status==200){
        setCookie("token",response?.data?.token)
    }
} catch (error) {
    console.log(error,"login");
    
}
    }
  return (
    <Box height="100vh" width="100%" bgcolor="gray" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

    <form onSubmit={handleSubmit(onsubmit)}  >

      <Box gap={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Controller
          control={control}
          name='username'
          render={({ field }) => (
            <input
              placeholder='user Name'
              type='text'
              {...field}

            />
          )}

        />
        <Controller
          control={control}
          name='password'
          render={({ field }) => (
            <input
              type='text'
              placeholder='password'
              {...field}

            />
          )}

        />

        <Button variant='outlined' type='submit'>log in </Button>
      </Box>

    </form>
  </Box>
  )
}

export default page
