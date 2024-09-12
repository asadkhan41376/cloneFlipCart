import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

const RegisterForm = ({setStep}) => {
  const {handleSubmit,control}= useForm()


  const onsubmit=async(data)=>{
    try {
     
     const ragisterUser = await axios.post('https://dummyjson.com/users/add',data)
     if(ragisterUser.status==201){
       console.log(ragisterUser,"asdasdas");
       
     }
    } catch (error) {
     console.log("reagister",error);
     
    }
 }
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>

<Typography variant='h4' textAlign="center" my={2}> signup </Typography>
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
  name='email'
  control={control}
  render={({ field }) => (
    <TextField
      fullWidth
      id="outlined-password-input"
      label="User email"
      type="email"
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
  <Button variant='outlined' type='submit'>Register</Button>
  </Grid>


  <Grid item lg={12} md={12} sm={12} textAlign="center" >
  <Typography>already have an account ? <Button  onClick={()=>setStep(`login`)}>log in</Button> </Typography>
  </Grid>
</Grid>


</form> 
    </>
  )
}

export default RegisterForm;
