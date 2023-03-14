// import { initialData } from '@/database/products';
// import { redirect } from 'next/dist/server/api-utils';
// import { useProducts } from '../../hooks/useProducts';
// import { useRouter } from 'next/router';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { dbProducts } from '@/database';
import { getAllProductsSlugs } from '@/database/dbProducts';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { ISeedProduct, iCartProduct } from '@/interfaces';
import { ProductSlideshow } from '../../components/products/ProductSlideshow';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import ItemCounter from '@/components/ui/ItemCounter/ItemCounter';
import React, { useState } from 'react'
import SizeSelector from '@/components/products/SizeSelector';
import { IValidSizes } from '../../interfaces/Products';

interface Props {
    product: ISeedProduct
}


// const product = initialData.products[0];

const ProductPage = ({ product }: Props) => {
    const [tempCartProduct, setTempCartProduct] = useState<iCartProduct>({
        _id: product._id,
        images: product.images[0],
        inStock: product.inStock,
        price: product.price,
        size: "M",
        slug: product.slug,
        title: product.title,
        type: product.type,
        gender: product.gender,
        quantity: 1,
    })

    const onSelectedSize = (size: IValidSizes) => {
        setTempCartProduct({
            ...tempCartProduct,
            size
        })
    }

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
                                selectedSize={tempCartProduct.size}
                                sizes={product.sizes}
                                onSelectedSize={onSelectedSize}
                            />
                        </Box>

                        {/* Agregar al carrito */}
                        {
                            (product.inStock > 0)
                                ?
                                (
                                    < Button color='secondary' className='circular-btn'>
                                        {
                                            tempCartProduct.size ?
                                                'Agregar al carrito' :
                                                'Selecciona un tamaño'
                                        }
                                    </Button>
                                ) :
                                (
                                    <Chip label="no hay disponibles" color='error' variant='outlined' />
                                )
                        }
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
        </ShopLayout >
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// * No usar esto, Server Side Rendering
// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//     const product = await dbProducts.getProductBySlug(ctx.query.slug as string)

//     if (!product) {
//         return {
//             notFound: true,
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//             product: JSON.parse(JSON.stringify(product))
//         }
//     }
// }


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const slugs = await getAllProductsSlugs();
    return {
        paths: [
            {
                params: {
                    slug: slugs.map(slug => slug.slug).toString()
                }
            }
        ],
        fallback: "blocking"
    }
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {

    if (!ctx.params) {
        return {
            notFound: true
        }
    }

    const product = await dbProducts.getProductBySlug(ctx.params.slug as string)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
}

export default ProductPage