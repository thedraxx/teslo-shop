import React from 'react'
import { ShopLayout } from '../../components/layouts/';
import { Box, Typography } from '@mui/material';

const Custom404 = () => {
    return (
        <ShopLayout
            title="Page not Found"
            pageDescription="404"
            imageFullUrl=""
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={'calc(100vh - 64px)'}
                sx={{
                    flexDirection: { xs: "column", sm: "row" }
                }}

            >
                <Typography variant="h1" component='h1' fontSize={50} >
                    404 - Page Not Found
                </Typography>
            </Box>
        </ShopLayout >
    )
}

export default Custom404