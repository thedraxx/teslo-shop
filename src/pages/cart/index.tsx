import { CartList, OrdenSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts'
import { Grid, Typography, Card, CardContent, Divider, Box, Button } from '@mui/material';
import React from 'react'

const CardPage = () => {
    return (
        <ShopLayout title='carrito - 3' pageDescription={"carrito de compra de la tienda"}>
            <Typography variant="h1" component="h1" fontWeight={700}>
                Carrito
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    {/* Slideshow */}
                    {/* CartList */}
                    <CartList
                        editable
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* Product Details */}
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant="h2" component="h2">
                                Orden
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            {/* Orden Summary */}

                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className='circular-btn' fullWidth>
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CardPage