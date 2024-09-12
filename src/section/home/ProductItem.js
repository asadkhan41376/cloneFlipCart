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
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Grid2, { Grid } from "@mui/material/Grid2"


const ProductsItems = () => {
    const [data, setData] = useState([]);

    const matches = useMediaQuery("(min-width:768px)");

    const getData = async () => {
        const res = await fetch("https://freetestapi.com/api/v1/products");
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
        <Container maxWidth >
            <Box bgcolor="white" my={2} px={5}>
                <Link href="cart">
                    <ToastContainer />
                </Link>
                <Stack direction="row" justifyContent="space-between" alignItems="center" py={3} px={5}>
                    <Typography variant="h5"> Best of Electronics </Typography>

                    <Link href="#">
                        <PlayCircleFilledIcon />
                    </Link>
                </Stack>

                {matches ?
                    (
                        <div className="flex justify-between align-middle  ">
                            <Swiper
                                slidesPerView={5}


                            >
                                {data.map((e, index) => (
                                    <SwiperSlide >
                                        <Stack key={index} direction="row" gap={3}>
                                            <Box>
                                                <Image
                                                    width={200}
                                                    height={100}
                                                    src={e.image}
                                                    alt="product Item"
                                                />
                                                <Box height={50}>
                                                    <Typography variant="p">{e.name}</Typography>
                                                </Box>
                                                <Typography my={1} variant="p" width="100%" display="inline-block">{e.price}</Typography>

                                                <div onClick={notify} >
                                                    <Button size="small" color="secondary" variant="contained" onClick={() => handelAdd(e)}>
                                                        add to cart
                                                    </Button>
                                                </div>
                                            </Box>


                                        </Stack>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="flex-col justify-between align-middle">
                            {data.map((e, i) => (
                                <div className="p-5 text-center   w-[100%] border-2 border-slate-300   divide-y divide-slate-700">
                                    <Image key={i} width={500} height={0} src={e.image} alt="image" />

                                    <div className="containt mt-5 ">
                                        <h1 className="h-[100px] my-4 text-[20px]">{e.name}</h1>
                                        <span className="text-[20px] text-red-300">

                                            from ${e.price}
                                        </span>
                                        <Box onClick={notify} my={3}>
                                            <Button fullWidth
                                                variant="outlined" color="secondary"
                                                onClick={() => handelAdd(e)}
                                            >
                                                add
                                            </Button>
                                        </Box>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </Box>
        </Container>


    );
};

export default ProductsItems;
