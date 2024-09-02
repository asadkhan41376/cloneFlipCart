"use client"
import Image from 'next/image';
import React from 'react'
// 
import { Swiper, SwiperSlide } from "swiper/react";

const Benner = () => {
    return (
        <>
            <Swiper

            >

                {
                    [...Array(3)].map((_, index) => (
                        <SwiperSlide key={index}>  <Image

                            width={1370}
                            height={0}
                            src="/Layout/benner/78e89d02375d5222.webp"
                            alt='banner'
                        /></SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    )
}

export default Benner
