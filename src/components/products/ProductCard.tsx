import React, { useMemo, useState } from 'react'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Chip } from '@mui/material';
import { ISeedProduct } from '@/interfaces'
import NextLink from 'next/link'
import Link from 'next/link';

interface props {
    product: ISeedProduct
}

export const ProductCard = ({ product }: props) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const productImage = useMemo(() => {
        if (isHovered) {
            return `/products/${product.images[0]}`
        } else {
            return `/products/${product.images[1]}`
        }
    }, [isHovered, product.images])


    return (
        <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href={`/product/${product.slug}`} prefetch={false} passHref legacyBehavior>




                    <CardActionArea>

                        {
                            (product.inStock === 0) &&
                            <Chip
                                label="No hay disponible"
                                color="primary"
                                sx={{ position: "absolute", zIndex: 999, top: '10px', left: '10px' }}
                            />
                        }

                        <CardMedia
                            component="img"
                            className='fadeIn '
                            height="300"
                            image={productImage}
                            alt={product.title}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className="fadeIn">

                <Typography variant="h6" component="h2" fontWeight={700}>
                    {product.title}
                </Typography>
                <Typography variant="h6" component="h2" fontWeight={500}>
                    ${product.price}
                </Typography>


            </Box>


        </Grid>
    )
}
