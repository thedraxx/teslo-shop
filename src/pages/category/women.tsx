import { ShopLayout } from "@/components/layouts"
import FullScreenLoading from "@/components/ui/Loading/FullScreenLoading"
import { useProducts } from "@/hooks"
import { ProductList } from '@/components/products/ProductList';
import { Typography } from '@mui/material';



const WomenPage = () => {
    const { products, isLoading } = useProducts('/products?gender=kid')

    return (
        <ShopLayout
            title="Kid"
            pageDescription="Kid Category"
            imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"
        >
            <Typography variant='h1' component="h1">Mujeres</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos para ellas</Typography>

            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList
                        products={products.products}
                    />
            }
        </ShopLayout>
    )
}

export default WomenPage