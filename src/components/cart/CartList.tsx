import React from 'react'
import { initialData } from '../../database/products';
import { CardActionArea, Grid, Link, Typography, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import ItemCounter from '../ui/ItemCounter/ItemCounter';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    editable?: boolean;
}


export const CartList = ({ editable = false }: Props) => {



    return (
        <>
            {
                productsInCart.map((product) => (
                    <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            {/* Llevar a la pagina del producto */}
                            <NextLink href={'/product/slug'} passHref legacyBehavior>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images[0]}`}
                                            component='img'
                                            sx={{ borderRadius: 100 }}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Typography variant="body1"> {product.title}</Typography>
                                <Typography variant="body1"> Talla M</Typography>
                                {/* Condicional */}
                                {
                                    editable
                                        ?
                                        <ItemCounter

                                        />
                                        :
                                        <Typography variant="body1">3</Typography>
                                }

                            </Box>
                        </Grid>
                        <Grid item xs={2} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                            <Typography variant="body1"> ${product.price}</Typography>
                            {/* Editable */}
                            {
                                editable
                                && (
                                    <Button variant="text" color="secondary">
                                        Eliminar
                                    </Button>
                                )

                            }

                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}
