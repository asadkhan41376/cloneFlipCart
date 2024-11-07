import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SideGallary = () => {
    return (
        <>
            <Stack gap={1}>
                {
                    [...Array(3)].map((e, i) => (
                        <Box key={i} sx={{ width: "80px", height: "80px", backgroundColor: "gray" }}>


                        </Box>
                    ))
                }

            </Stack>
        </>
    )
}

export default SideGallary
