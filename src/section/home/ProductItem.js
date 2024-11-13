"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addtocart } from "@/redux/feachers/cartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useMediaQuery } from "usehooks-ts";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Grid from '@mui/material/Grid';
import MyImage from "@/components/Image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductsItems = () => {
  const [data, setData] = useState([]);

  const matches = useMediaQuery("(min-width:768px)");

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data?.products,"dlkal");
    

    setData(data?.products);
  };
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const handelAdd = (e) => {
    dispatch(addtocart(e));
    notify();
  };

  const notify = () =>
    toast.success(" view your cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <Container maxWidth>
      <Box bgcolor="white" my={2} px={{lg:5,md:5,sm:3}} py={3}>
        <Link href="cart">
          <ToastContainer />
        </Link>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
          px={5}
        >
          <Typography variant="h5">Find Your Luxe Lifestyle</Typography>

          <Link href="#">
            <PlayCircleFilledIcon />
          </Link>
        </Stack>

        {matches ? (
          <div className="flex justify-between align-middle  ">
            <Swiper slidesPerView={5}>
             {
              data.map((e,index)=>(
                <SwiperSlide key={index}>
                <Stack direction="row">
                  <Card variant="outlined" sx={{ padding: " 30px" }}>
                    <Box display="flex" justifyContent="center">
                     <Link href={`/product/${e.id}`}>
                     
                     <MyImage
                        src={e.images[0]}
                        height="120px"
                        width="120px"
                        alt="ha"
                      />
                     </Link>
                    </Box>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography>{e.title.split(" ")[0]}</Typography>
                      <Typography>{e.price}₹</Typography>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={() => handelAdd(e)}
                      >
                        Add To Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Stack>
              </SwiperSlide>
              ))
             }
            </Swiper>
          </div>
        ) : (
         
             <Grid container spacing={2}  justifyContent="center">
            {data.map((e, index) => (
              <Grid item sm={6} key={index}> 
 <Card >
 <Box display="flex" justifyContent="center">
 <Link href={`/product/${e.id}`}> <MyImage
     src={e.images[0]}
     height="120px"
     width="120px"
     alt="ha"
   /></Link>
 </Box>
 <CardContent
   sx={{
     textAlign: "center",
   }}
 >
   <Typography>{e.title.split(" ")[0]}</Typography>
   <Typography>{e.price}₹</Typography>
   <Button
     fullWidth
     endIcon={<ShoppingCartIcon  />}
     variant="outlined"
     color="secondary"
     onClick={() => handelAdd(e)}
   >
     Add To 
   </Button>
 </CardContent>
</Card>
            </Grid>
            ))}
           </Grid>
       
        )}
      </Box>
    </Container>
  );
};

export default ProductsItems;
