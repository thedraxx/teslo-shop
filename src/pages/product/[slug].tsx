import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { initialData } from '@/database/products';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ProductSlideshow } from '../../components/products/ProductSlideshow';
import ItemCounter from '@/components/ui/ItemCounter/ItemCounter';
import SizeSelector from '@/components/products/SizeSelector';
import { useRouter } from 'next/router';
import { useProducts } from '../../hooks/useProducts';
import { ISeedProduct } from '@/interfaces';
import { GetServerSideProps } from 'next'
import { dbProducts } from '@/database';
import { redirect } from 'next/dist/server/api-utils';
interface Props {
    product: ISeedProduct
}


// const product = initialData.products[0];

const ProductPage = ({ product }: Props) => {

    // const router = useRouter()
    // console.log(router.query.slug)
    // const { products: product, isLoading } = useProducts(`/products/${router.query.slug}`)
    // console.log(product)

    // if (isLoading) {
    //     return <h1>cargando</h1>
    // }
    // if (!product) {
    //     return <h1>no hay producto</h1>
    // }

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


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const product = await dbProducts.getProductBySlug(ctx.query.slug as string)

    if (!product) {
        return {
            notFound: true,
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}



export default ProductPage