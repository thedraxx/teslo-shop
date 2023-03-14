
import { ShopLayout } from '@/components/layouts'
import { Box, Typography } from '@mui/material'
import { ProductList } from '@/components/products/ProductList';
import { GetServerSideProps } from 'next'
import { dbProducts } from '@/database';
import { ISeedProduct } from '@/interfaces';

interface Props {
    products: ISeedProduct[];
    foundProducts: boolean;
    query: string;
}


const SearchPage = ({ products, foundProducts, query }: Props) => {


    return (
        <ShopLayout
            title="Shop"
            pageDescription="Shop"
            imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"
        >
            <Typography variant='h1' component="h1">Buscar Producto</Typography>
            {
                foundProducts
                    ? <Typography variant='h2' sx={{ mb: 1 }} textTransform={"capitalize"}>termino: {query}</Typography>
                    : (
                        <Box display={"flex"}>
                            <Typography variant='h2' sx={{ mb: 1 }}>No se encontraron productos</Typography>
                            <Typography variant='h3' sx={{ ml: 1 }} color={"secondary"} textTransform={"capitalize"}>{query}</Typography>
                        </Box>
                    )
            }
            <ProductList products={products} />

        </ShopLayout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = '' } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query);
    const foundProducts = products.length > 0;

    // TODO: Retornar otros productos si no hay resultados
    if (!foundProducts) {
        products = JSON.parse(JSON.stringify(await dbProducts.getAllProducts()));
    }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}

export default SearchPage