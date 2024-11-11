"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem, setItems } from "@/redux/feachers/cartSlice";
import { useMediaQuery } from "usehooks-ts";
import { Box, Button, Stack } from "@mui/material";
import { Grid } from '@mui/system'
import { loadDataToLocal } from "@/redux/feachers/cartSlice";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const ShoppingCart = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const dispatch = useDispatch();
  const handelRemove = (e) => {
    dispatch(removeItem(e));
  };


  const { items } = useSelector((state) => state.cart);
useEffect(()=>{
dispatch(loadDataToLocal())
},[dispatch])


  return (
    <div className="lg:flex flex-wrap gap-[50px]  md:flex-wrap ">
      <div className="lg:w-[60%] md:w-[100%]">
        <Stack direction="row" bgcolor="white" justifyContent="space-between" my={2} p={3}>
          <h1>From Saved Addresses</h1>
          <button>Enter Delivery Pincode</button>
        </Stack>

        <Box bgcolor="white">
          {items.map((e,index) => (
            <>
              <Grid key={index} container alignItems="center">
                <Grid items size={{ lg: 8, md: 8, sm: 12, sx: 12 }} p={4}>

                  <Image width={150} height={150} src={e.images[0]} alt="image not found" />

                  <Box my={2} maxWidth> 
                    <h1>{e.name}</h1>
                    <h1> ${e.price}</h1>
                    <h1> Quantity: {e.quantity}</h1>
                    <p>This is randome Api DecCription</p>
                  </Box>


                </Grid>

                <Grid items size={{ lg: 4, md: 4, sm: 12, sx: 12 }}>
                  <Button variant="contained" onClick={()=>handelRemove(e)}>Remove</Button>
                </Grid>
              </Grid>
            </>
          ))}
        </Box>
      </div>


    </div>
  );
};

export default ShoppingCart;
