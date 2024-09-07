import Image from 'next/image'
import React from 'react'

import { Box, Container } from '@mui/material'

const ProductList = () => {
  return (
    <Container maxWidth >
 <Box my={2} display="flex" flexWrap="wrap"  alignItems="center" justifyContent="center" gap={8} bgcolor="white">
   {
            [...Array(9)].map((_,i)=>(
                <div className='w-[70px]' key={i} >
                <Image
                
                src="/Layout/productLisht/29327f40e9c4d26b.webp"
                width={70}
                height={0}
                alt='product list'
                />
                
                <div className=' text-center mt-2'><h1>Product</h1></div>
                       </div>
            ))
        }
    </Box>
    </Container>
   
     

      
      
        
   
  )
}

export default ProductList
