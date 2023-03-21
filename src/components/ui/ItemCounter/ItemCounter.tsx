import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
interface Props {
    currentValue: number
    maxVal: number

    // METHOD
    updateQuantity: (DecreaseOrIncrease: "decrease" | "increase", maxVal: number) => void
}

const ItemCounter = ({ updateQuantity, currentValue, maxVal }: Props) => {
    return (
        <Box display="flex" alignItems={'center'}>
            <IconButton
                onClick={() => updateQuantity("decrease", maxVal)}
            >
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
            <IconButton
                onClick={() => updateQuantity("increase", maxVal)}
            >
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}

export default ItemCounter