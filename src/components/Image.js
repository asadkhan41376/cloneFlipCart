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
    
    >
      
    </Box>
  )
}

export default MyImage;
