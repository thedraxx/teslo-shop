
import { ShopLayout } from '@/components/layouts'
import { Typography } from '@mui/material'
import { initialData } from '../database/products';
import { ProductList } from '@/components/products/ProductList';


const index = () => {
  return (
    <ShopLayout
      title="Shop"
      pageDescription="Shop"
      imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"

    >
      <Typography variant='h1' component="h1">Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList
        products={initialData.products as any}
      />

    </ShopLayout>
  )
}

export default index