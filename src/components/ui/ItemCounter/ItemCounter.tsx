import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
interface Props {
    currentValue: number

    // METHOD
    updateQuantity: (DecreaseOrIncrease: "decrease" | "increase") => void
}

const ItemCounter = ({ updateQuantity, currentValue }: Props) => {
    return (
        <Box display="flex" alignItems={'center'}>
            <IconButton
                onClick={() => updateQuantity("decrease")}
            >
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
            <IconButton
                onClick={() => updateQuantity("increase")}
            >
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}

export default ItemCounter