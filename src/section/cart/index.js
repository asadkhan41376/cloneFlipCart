"use client"
import React from 'react'
// import{Grid} from "@mui/material/Grid2"
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/system'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const CartSection = () => {
  const {items} = useSelector((data)=> data.cart)



  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={{ lg: 8, md: 8, sm: 12, xs: 12 }} >
          <ShoppingCart />

        </Grid>
        <Grid item size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
          <Box bgcolor="white" my={2} p={2}>
            <Typography variant='p' sx={{ fontSize: "20px" }}>Price details</Typography>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
              <Typography variant='p'>Price ({items.length} item)</Typography>
              <Typography variant='p'>₹4,999</Typography>

            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
              <Typography variant='p'>Discount</Typography>
              <Typography variant='p'>− ₹3,300</Typography>

            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
              <Typography variant='p'>Platform Fee</Typography>
              <Typography variant='p'>₹3</Typography>

            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
              <Typography variant='p'>Delivery Charges</Typography>
              <Typography variant='p'>Free</Typography>

            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} py={2}>
              <Typography variant='p' sx={{ fontWeight: "bold" }}>Total Amount</Typography>
              <Typography variant='p' sx={{ fontWeight: "bold" }}>₹1,702</Typography>

            </Stack>
            <Divider />
          </Box>

        </Grid>
      </Grid>

    </>
  )
}

export default CartSection
