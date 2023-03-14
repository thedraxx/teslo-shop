import { IValidSizes } from '@/interfaces';
import { Box, Button } from '@mui/material';
import React from 'react'

interface Props {
    selectedSize?: IValidSizes;
    sizes: IValidSizes[]

    // method: (size: IValidSizes) => void
    onSelectedSize: (size: IValidSizes) => void
}


const SizeSelector = ({ selectedSize, sizes, onSelectedSize }: Props) => {
    return (
        <Box>
            {
                sizes.map((size) => (
                    <Button
                        key={size}
                        variant={selectedSize === size ? 'contained' : 'outlined'}
                        color={selectedSize === size ? 'secondary' : 'primary'}
                        size='small'
                        onClick={() => onSelectedSize(size)}
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}

export default SizeSelector