import Image from 'next/image'
import React from 'react'

import { Box, Container, Stack, Typography } from '@mui/material'
import MyImage from '@/components/Image'
const productList =[
  {
    item:"/Layout/productLisht/29327f40e9c4d26b.webp",
    name:"Grocery"
  },
  {
    item:"/Layout/productLisht/item_2.webp",
    name:"Fashion"
  },
  {
    item:"/Layout/productLisht/item_9.webp",
    name:"Mobiles"
  },
  {
    item:"/Layout/productLisht/item_4.webp",
    name:"Electronics"
  },
  {
    item:"/Layout/productLisht/item_5.webp",
    name:"Home & Furniture"
  },
  {
    item:"/Layout/productLisht/item_6.webp",
    name:"Flight Bookings"
  },
  {
    item:"/Layout/productLisht/item_7.webp",
    name:"Beauty, Toys & More"
  },
  {
    item:"/Layout/productLisht/item_8.webp",
    name:"Two Wheelers"
  },
  {
    item:"/Layout/productLisht/item_10.webp",
    name:"Appliances"
  },
  
]

const ProductList = () => {
  return (
   
 <Container maxWidth>

<Box my={2} p={3} sx={{overflowX:"scroll",display:"flex",alignItems:"center",justifyContent:"start",gap:"50px"}} bgcolor="white">
{
  productList.map((e,i)=>(
<Stack>
<MyImage
    src={e.item}
    width="70px"
    height="70px"
    alt="list"
    />
<Typography>{e.name}</Typography>
</Stack>
    
  ))
}
  </Box>


 </Container>
  
   
     

      
      
        
   
  )
}

export default ProductList
