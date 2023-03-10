import { IValidSizes } from '@/interfaces';
import { Box, Button } from '@mui/material';
import React from 'react'

interface Props {
    selectedSize?: IValidSizes;
    sizes: IValidSizes[]
}


const SizeSelector = ({ selectedSize, sizes }: Props) => {


    return (
        <Box>
            {
                sizes.map((size) => (
                    <Button
                        key={size}
                        variant={selectedSize === size ? 'contained' : 'outlined'}
                        color={selectedSize === size ? 'secondary' : 'primary'}
                        size='small'
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}

export default SizeSelector