
import { ShopLayout } from '@/components/layouts'
import { Typography } from '@mui/material'
import { ProductList } from '@/components/products/ProductList';
import { GetServerSideProps } from 'next'
import { dbProducts } from '@/database';
import { ISeedProduct } from '@/interfaces';

interface Props {
    products: ISeedProduct[];
}


const SearchPage = ({ products }: Props) => {


    return (
        <ShopLayout
            title="Shop"
            pageDescription="Shop"
            imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"
        >
            <Typography variant='h1' component="h1">Buscar Producto</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>ABC --- 123</Typography>
            {
                <ProductList
                    products={products}
                />
            }
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
    // TODO: Retornar otros productos si no hay resultados
    return {
        props: {
            products
        }
    }
}

export default SearchPage