import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';
const FullScreenLoading = () => {
    return (
        <div>
            <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                height={'calc(100vh - 64px)'}
            >
                <Typography variant="h2" fontWeight={200} fontSize={20} sx={{ mb: 3 }}>
                    Cargando...
                </Typography>
                <CircularProgress
                    thickness={2}
                />
            </Box></div>
    )
}

export default FullScreenLoading