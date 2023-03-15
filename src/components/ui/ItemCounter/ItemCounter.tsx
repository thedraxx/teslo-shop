import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
interface Props {
    updateQuantity: (DecreaseOrIncrease: string) => void
    currentValue: number
}

const ItemCounter = ({ updateQuantity, currentValue }: Props) => {


    return (
        <Box display="flex" alignItems={'center'}>
            <IconButton>
                <RemoveCircleOutline
                    onClick={() => updateQuantity("decrease")}
                />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
            <IconButton>
                <AddCircleOutline
                    onClick={() => updateQuantity("increase")}
                />
            </IconButton>

        </Box>
    )
}

export default ItemCounter