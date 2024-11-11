
"use client"
import MyImage from '@/components/Image'
import { addtocart } from '@/redux/feachers/cartSlice'
import { Box, Button, Card, CardContent, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const CategoryProduct = () => {
    const [mens, SetMens] = useState([])
    const [loading, setLoading] = useState(true);
    const [Category, SetCategory] = useState("fragrances")
const dispatch = useDispatch()


    const MensData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")


            const mensCategory = response?.data?.products.filter((product) => product?.category === Category)
            SetMens(mensCategory)
            console.log("ddfdsfsdfds", mens);
            setLoading(false)
        } catch (error) {
            console.log("mensData", error);

        }


    }

   const handelAdd = (e)=>{
    dispatch(addtocart(e))
}

    useEffect(() => {
        MensData();
    }, [Category])

    const handleChange = (event) => {
        SetCategory(event.target.value);


    };



    
    return (
        <>
            <Container maxWidth >


                <Stack direction="row" alignItems="center" justifyContent="space-between" textAlign="center" px={{ xs: 2, sm: 5, md: 10 }} py={{ xs: 2, sm: 5, md: 10 }} bgcolor="white" >
                    <Typography variant='h4' textTransform="capitalize" >{Category}</Typography>
                    <FormControl variant="standard" >
                        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={Category}
                            onChange={handleChange}
                            label="Age"
                        >

                            <MenuItem value={"beauty"}>Beauty</MenuItem>
                            <MenuItem value={"fragrances"}>Fragrances</MenuItem>
                            <MenuItem value={"furniture"}>Furniture</MenuItem>
                            <MenuItem value={"groceries"}>Groceries</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>


                <Box bgcolor="white" my={2} px={5} py={3} display="flex" alignItems="center" justifyContent="space-around" flexWrap="wrap" gap={2}>
                    {
                        mens.map((categoryProduct, index) => (


                            <Card key={index} variant="outlined"

                                sx={{ padding: " 30px" }}>

                                <Box display="flex" justifyContent="center">
                                    <MyImage

                                        src={categoryProduct.images[0]}
                                        height="120px"
                                        width="120px"
                                        alt="ha"

                                    />
                                </Box>
                                <CardContent sx={{ textAlign: "center", }}>
                                    <Typography>{categoryProduct.title.split(" ")[0]}</Typography>
                                    <Typography>{categoryProduct.price}₹</Typography>
                                    <Button fullWidth
                                        variant="outlined" color="secondary"
                                        onClick={() => handelAdd(e)}
                                    >
                                        Add To Cart
                                    </Button>
                                </CardContent>

                            </Card>



                        ))
                    }
                </Box>


            </Container>

        </>
    )
}

export default CategoryProduct
