import { Scale } from '@mui/icons-material';
import { Box } from '@mui/material'
import React from 'react'

const MyImage = ({sx,src,height,width,alt}) => {
  return (
    <Box
    component="img"
    src={src}
    height={height}
    width={width}
    alt={alt}
    // sx={{"&:hover": {
    //         scale: "1.1", // Change background color on hover
    //         transition:"all .5s"
    //     }}}
    
    >
      
    </Box>
  )
}

export default MyImage;
