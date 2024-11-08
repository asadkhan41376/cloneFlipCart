import React, { useEffect } from 'react'
import { Box, TextField, Grid, Dialog, Typography, Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useDispatch } from 'react-redux';
import { getProfileData } from '@/redux/feachers/profile';
const LoginForm = ({setStep}) => {
  const { handleSubmit, control } = useForm()
const dispatch = useDispatch()
  const onsubmit=async(data)=>{
    try {
        const response = await axios.post('https://dummyjson.com/user/login',data)
        console.log("csdsd",response.data.accessToken);
        
        if(response.status==200){
            setCookie("token",response?.data?.accessToken)
            dispatch(getProfileData())
        }
    } catch (error) {
        console.log(error,"login");
        
    }
        }
 
  return (
  <>
    <form onSubmit={handleSubmit(onsubmit)}>
      <Box>
      <Typography>user : emilys</Typography>
      <Typography>password : emilyspass</Typography>
      <Typography>just becouse this is dummy user api </Typography>
      </Box>
    
<Typography variant='h4' textAlign="center" my={2}> Login </Typography>

<Grid container spacing={2}>

  <Grid item lg={12} md={12} sm={12} >


    <Controller
      name='username'
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          id="outlined-password-input"
          label="User Name"
          type="text"
          {...field}

        />
      )}
 />

 

  </Grid>

  <Grid item lg={12} md={12} sm={12} >
    <Controller

      control={control}
      name='password'
      render={({ field }) => (
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="text"
          {...field}
        />
      )}

    />


  </Grid>

  <Grid item lg={12} md={12} sm={12} textAlign="center" >
  <Button variant='outlined' type='submit'>log in </Button>
  </Grid>

  <Grid item lg={12} md={12} sm={12} textAlign="center" >
  <Typography>don&apos;t have an account? <Button  onClick={()=>setStep("signup")}>signup</Button> </Typography>
  </Grid>
</Grid>
</form>
  </>
  )
}

export default LoginForm
