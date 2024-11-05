"use client";
import {
  Box,
  TextField,
  Stack,
  Button,
  Avatar,
  useMediaQuery,
  Typography,
  Badge,
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
import LogOutMenu from "./logOut/LogutMenu";
import BasicMenu from "./logOut/LogutMenu";
import MyImage from "@/components/Image";


const Navbar = () => {
  const matchs = useMediaQuery("(max-width:768px)");

  const { Profile } = useSelector((data) => data.Profile);

  const {items} = useSelector((data)=>data.cart)
  // console.log(Profile?.username,"dadjasdjaks");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

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
              <MyImage
                src="/Layout/header/logoFlipCart.svg"
                width="150"
                height="150"
                alt="logo"
                
              />
            </Link>

            <Stack
              flexDirection="row"
              gap={2}
              width="100%"
              justifyContent="end"
              alignItems="center"
            >
              <Stack direction="row" p={2} alignItems="center" gap={2}>

                <Avatar src={Profile?.image} />

                {Profile?.username ? <BasicMenu username={Profile?.username} /> : <AuthDialog />}

              </Stack>

              <Stack flexDirection="row" alignItems="center">
              <Badge badgeContent={items.length} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                <MobileDrowor />
              </Stack>
            </Stack>
          </Stack>
        ) : (

          // for desktop 
          <Grid container textAlign="center" spacing={5}>
            <Grid size={{ lg: 3, md: 3 }}>
              <Link href="/">
                <MyImage
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



                <Stack direction="row" alignItems="center" gap={2}>

                  <Avatar src={Profile?.image} />

                  {Profile?.username ? <BasicMenu username={Profile?.username} /> : <AuthDialog />}

                </Stack>






                <Button
                  startIcon={<Link href="/cart">
                    <Badge badgeContent={items.length} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>}
                  sx={{ color: "black" }}
                >
                  <Link href="/cart">Cart </Link>

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
