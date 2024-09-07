"use client";
import {
  Box,
  TextField,
  Stack,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React, { useEffect } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AvTimer } from "@mui/icons-material";
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "@/redux/feachers/profile";
import MobileDrowor from "./MobilDrwor/MobileDrowor";
import AuthDialog from "./AuthDialog/Dialog";
import Link from "next/link";

const Navbar = () => {
  const matchs = useMediaQuery("(max-width:768px)");

  const { Profile } = useSelector((data) => data.Profile);
  // console.log(Profile?.username,"dadjasdjaks");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: "white" }} p={{ lg: 2, md: 2, sm: 0 }}>
        {matchs ? (
                    // for MObile  

          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/">
            <Image
              src="/Layout/header/logoFlipCart.svg"
              width="150"
              height="150"
              alt="logo"
              priority
            />
            </Link>
            
            <Stack
              flexDirection="row"
              gap={2}
              width="100%"
              justifyContent="end"
              alignItems="center"
            >
              <Button
                  startIcon={<Avatar src={Profile?.image} sizes="small" />}
                  sx={{ color: "black" }}
                >
                  {Profile?.username ? (
                    Profile?.username
                  ) : (
                    <Button size="small">
                      <AuthDialog />
                    </Button>
                  )}
                </Button>
              <Stack flexDirection="row" alignItems="center">
                <ShoppingCartIcon />
                <MobileDrowor />
              </Stack>
            </Stack>
          </Stack>
        ) : (

          // for desktop 
          <Grid container textAlign="center" spacing={5}>
            <Grid size={{ lg: 3, md: 3 }}>
             <Link href="/">
             <Image
                src="/Layout/header/logoFlipCart.svg"
                width="200"
                height="150"
                alt="logo"
                priority
              />
             </Link>
            </Grid>
            <Grid size={{ lg: 3, md: 6 }}>
              <TextField fullWidth variant="standard" size="small" />
            </Grid>
            <Grid size={{ lg: 6, md: 6 }} display="flex" alignItems="center">
              <Stack direction="row" gap={3}>
                <Button
                  startIcon={<Avatar src={Profile?.image} sizes="small" />}
                  sx={{ color: "black" }}
                >
                  {Profile?.username ? (
                    Profile?.username
                  ) : (
                    <Button size="small">
                      <AuthDialog />
                    </Button>
                  )}
                </Button>
                
                <Button
                  startIcon={ <Link href="/cart"><ShoppingCartIcon /></Link>}
                  sx={{ color: "black" }}
                >
                <Link href="/cart">  Cart</Link>
                
                </Button>
                <Button startIcon={<StorefrontIcon />} sx={{ color: "black" }}>
                  Become a seller
                </Button>
                <Button
                  startIcon={<DragIndicatorSharpIcon />}
                  sx={{ color: "black" }}
                ></Button>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Navbar;
