import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
interface Props {

}

const ItemCounter = () => {


    return (
        <Box display="flex" alignItems={'center'}>
            <IconButton>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>
                <IconButton>
                    <AddCircleOutline />
                </IconButton>
            </Typography>
        </Box>
    )
}

export default ItemCounter