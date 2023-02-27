import { CartList, OrdenSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts'
import { Grid, Typography, Card, CardContent, Divider, Box, Button, Link } from '@mui/material';
import React from 'react'
import NextLink from 'next/link';

const SummaryPage = () => {
    return (
        <ShopLayout title='resumen de orden' pageDescription={"resumen de la orden"}>
            <Typography variant="h1" component="h1" fontWeight={700}>
                Resumen de la orden
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    {/* Slideshow */}
                    {/* CartList */}
                    <CartList

                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* Product Details */}
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant="h2" component="h2">
                                Resumen (3 productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            {/* Orden Summary */}
                            <Box sx={{ mt: 3 }} display={"flex"} justifyContent={"space-between"}>
                                <Typography variant='subtitle1'>
                                    Direccion de entrega
                                </Typography>
                                <NextLink
                                    href='/checkout/address'
                                    passHref
                                    legacyBehavior
                                >
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>


                            <Typography>
                                Fernando
                            </Typography>
                            <Typography>
                                32323 ALGUN LUGAR
                            </Typography>
                            <Typography >
                                132123 - Bogota
                            </Typography>
                            <Typography >
                                DASADASD,
                            </Typography>
                            <Typography >
                                cANADA
                            </Typography>
                            <Typography >
                                123134213
                            </Typography>


                            <Divider sx={{ my: 1 }} />


                            <Box sx={{ mt: 3 }} display={"flex"} justifyContent={"end"}>
                                <NextLink
                                    href='/cart'
                                    passHref
                                    legacyBehavior
                                >
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>



                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage