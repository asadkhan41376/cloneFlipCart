"use client"
import Image from 'next/image';
import React from 'react'
// 
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = [
    {
        bannerimg: "/Layout/benner/78e89d02375d5222.webp"
    }, {
        bannerimg: "/Layout/benner/sale.webp"
    }
]

const Benner = () => {
    return (
        <>
            <Swiper
                loop

            >

                {
                    Banner.map((e, index) => (
                        <SwiperSlide key={index}>  <Image

                            width={1370}
                            height={0}
                            src={e.bannerimg}
                            alt='banner'
                            priority
                        /></SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    )
}

export default Benner
