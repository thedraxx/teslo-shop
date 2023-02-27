import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { initialData } from '@/database/products';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ProductSlideshow } from '../../components/products/ProductSlideshow';
import ItemCounter from '@/components/ui/ItemCounter/ItemCounter';
import SizeSelector from '@/components/products/SizeSelector';

const product = initialData.products[0];

const Slug = () => {
    return (
        <ShopLayout
            title={product.title}
            pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    {/* Slideshow */}
                    <ProductSlideshow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* Product Details */}
                    <Box display={"flex"} flexDirection={"column"}>
                        {/* Titulos */}
                        <Typography variant="h1" component="h1" fontWeight={700}>
                            {product.title}
                        </Typography>
                        <Typography variant="h2" component="h2">
                            ${product.price}
                        </Typography>

                        {/* Cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2" >
                                Cantidad
                            </Typography>
                            {/* Subcounter */}
                            <ItemCounter />
                            <SizeSelector
                                selectedSize={product.sizes[0]}
                                sizes={product.sizes}
                            />
                        </Box>

                        {/* Agregar al carrito */}
                        <Button color='secondary' className='circular-btn'>
                            Agregar al carrito
                        </Button>

                        {/* <Chip label="no hay disponibles" color='error' variant='outlined' /> */}


                        {/* Descripcion */}

                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2" >
                                Descripcion
                            </Typography>
                            <Typography variant="body2" >
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default Slug