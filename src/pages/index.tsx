
import { ShopLayout } from '@/components/layouts'
import { Typography } from '@mui/material'
import { ProductList } from '@/components/products/ProductList';
import { useProducts } from '@/hooks';
import FullScreenLoading from '@/components/ui/Loading/FullScreenLoading';


const HomePage = () => {

  const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout
      title="Shop"
      pageDescription="Shop"
      imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"

    >
      <Typography variant='h1' component="h1">Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

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

export default HomePage