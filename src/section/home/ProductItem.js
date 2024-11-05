"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import Grid2, { Grid } from "@mui/material/Grid2";
import MyImage from "@/components/Image";

const ProductsItems = () => {
  const [data, setData] = useState([]);

  const matches = useMediaQuery("(min-width:768px)");

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const handelAdd = (e) => {
    dispatch(addtocart(e));
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
      <Box bgcolor="white" my={2} px={5} py={3}>
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
          <Typography variant="h5"> Best of Electronics </Typography>

          <Link href="#">
            <PlayCircleFilledIcon />
          </Link>
        </Stack>

        {matches ? (
          <div className="flex justify-between align-middle  ">
            <Swiper slidesPerView={5}>
              {data.map((e, index) => (
                <SwiperSlide key={index}>
                  <Stack direction="row">
                    <Card variant="outlined" sx={{ padding: " 30px" }}>
                      <Box display="flex" justifyContent="center">
                        <MyImage
                          src={e.image}
                          height="120px"
                          width="120px"
                          alt="ha"
                        />
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
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex-col justify-between align-middle">
            {data.map((e, index) => (
              <div
                key={index}
                className="p-3 text-center   w-[100%] border-2 border-slate-300   divide-y divide-slate-700"
              >
                <Card>
                  <Box display="flex" justifyContent="center">
                    <MyImage
                      src={e.image}
                      height="120px"
                      width="120px"
                      alt="ha"
                    />
                  </Box>
                  <CardContent
                    sx={{
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Typography>{e.title}...</Typography>
                    <Typography>{e.price}₹</Typography>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      onClick={() => handelAdd(e)}
                    >
                      add
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Box>
    </Container>
  );
};

export default ProductsItems;
