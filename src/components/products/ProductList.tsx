import React from 'react'
import { Grid } from '@mui/material';
import { ISeedProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';

interface props {
    products: ISeedProduct[]
}


export const ProductList = ({ products }: props) => {
    return (
        <Grid container spacing={4}>
            {
                products.map((product) => (
                    <ProductCard
                        key={product.slug}
                        product={product}
                    />
                ))
            }
        </Grid>
    )
}
