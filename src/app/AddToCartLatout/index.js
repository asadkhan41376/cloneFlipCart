"use client"

import MyImage from '@/components/Image';
import { Box, Button, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SideGallary from './SideGallary';
import { useMediaQuery } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/redux/feachers/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';

const AddTocart = ({ id }) => {
    const [data, setData] = useState([]);
    const matches = useMediaQuery("(min-width:768px)");


    const DynamicData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        setData(data);
        // console.log(data);

    };
    useEffect(() => {
        DynamicData();
    }, []);

const dispatch= useDispatch()
    const AddToCart= (e)=>{
dispatch(addtocart(e))

    }

    return (
        <Grid container padding={2} mt={1}bgcolor="white">
            <Grid item lg={6} md={6} sm={12}>

                <Stack direction="row" gap={2}>
                    <SideGallary />
                    <Box height={ matches? `400px`:`100%`} width={ matches? `450px`:`100%`}   >
                        <MyImage
                            src={data.image}
                            height="100%"
                            width="100%"
                            alt="dynamic image"
                        />

                    </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                </Stack>


            </Grid>
            
            <Grid item lg={5} md={5}  sm={12}>

<Stack gap={2}>

    <Typography variant='h5'>{data.title}</Typography>
    <Box>

        <Typography sx={{color:"green"}}>Special price</Typography>
    <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant='h5' >₹{data.price} </Typography>
          <Typography  variant='h6' sx={{textDecoration:"line-through", color:"#878787"}}>₹55.50 </Typography>
          <Typography  variant='h6' sx={{ color:"green"}}> 78% off </Typography>
    </Stack>
    </Box>
    <Typography>{data.category}</Typography>
    <Typography>{data?.rating?.rate} <Rating  size="small" name="read-only" value={Math.floor(data?.rating?.rate)} readOnly /></Typography>
    <Typography>{data?.description}</Typography>


    <Stack mt={3} direction="row" justifyContent="center" alignItems="center" gap={2}><Button onClick={()=>AddToCart(data)} variant="contained" color='secondary' endIcon={<ShoppingCartIcon/>}>Add To Cart</Button>
    <Button onClick={()=>alert("payment methode not availeble")} variant="contained" color='secondary' endIcon={<PaymentsIcon/>}>Check out  </Button>
    </Stack>
</Stack>
            </Grid>

        </Grid>
    )
}

export default AddTocart;
