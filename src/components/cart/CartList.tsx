import React, { useContext } from 'react';
import { initialData } from '../../database/products';
import { CardActionArea, Grid, Link, Typography, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import ItemCounter from '../ui/ItemCounter/ItemCounter';
import { CartContext } from '@/context';

interface Props {
    editable?: boolean;
}


export const CartList = ({ editable = false }: Props) => {

    const { cart } = useContext(CartContext)


    const updateQuantity = (DecreaseOrIncrease: string, maxVal: number) => {
        if (DecreaseOrIncrease === "increase") {

            return
        } else {

        }
    }


    return (
        <>
            {
                cart.map((product) => (
                    <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            {/* Llevar a la pagina del producto */}
                            <NextLink href={'/product/slug'} passHref legacyBehavior>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images}`}
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
                                <Typography variant="body1">Talla {product.size} </Typography>
                                {/* Condicional */}
                                {
                                    editable
                                        ?
                                        <ItemCounter
                                            currentValue={product.quantity}
                                            maxVal={product.inStock}
                                            updateQuantity={updateQuantity}
                                        />
                                        :
                                        <Typography variant="body1">
                                            Cantidad: {product.quantity}
                                        </Typography>
                                }

                            </Box>
                        </Grid>
                        <Grid item xs={2} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                            <Typography variant="body1"> ${product.price * product.quantity}</Typography>
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
