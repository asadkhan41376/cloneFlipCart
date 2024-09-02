
"use client"
import { Box, TextField, Stack, Button, Avatar } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AvTimer } from '@mui/icons-material'
import DragIndicatorSharpIcon from '@mui/icons-material/DragIndicatorSharp';
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '@/redux/feachers/profile'
const Navbar = () => {

const {Profile}= useSelector((data)=>data.Profile)
// console.log(Profile?.username,"dadjasdjaks");


const dispatch =useDispatch()
useEffect(()=>{
dispatch(getProfileData())
},[])

    return (
        <>
            <Box sx={{ backgroundColor: "white" }} p={2} >

                <Grid container textAlign="center" spacing={5}>
                    <Grid size={{ lg: 3, md: 3 }} >
                        <Image
                            src="/Layout/header/logoFlipCart.svg"
                            width="150"
                            height="150"
                            alt='logo'
                            priority
                        />
                    </Grid>
                    <Grid size={{ lg: 4, md: 6 }}>
                        <TextField
                            fullWidth
                            variant="standard"
                            size='small'
                        />
                    </Grid>
                    <Grid size={{ lg: 5, md: 6 }} display="flex" alignItems="center" >
                        <Stack direction="row" gap={4}>
                            <Button startIcon={<Avatar sizes='small' />} sx={{ color: "black" }}>{Profile?.username? Profile?.username:"user"}</Button>
                            <Button startIcon={<ShoppingCartIcon />} sx={{ color: "black" }}  > Cart</Button>
                            <Button startIcon={<StorefrontIcon />} sx={{ color: "black" }}>Become a seller</Button>
                            <Button startIcon={<DragIndicatorSharpIcon />} sx={{ color: "black" }}></Button>
                        </Stack>


                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default Navbar
