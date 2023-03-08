
import { ShopLayout } from '@/components/layouts'
import { Typography } from '@mui/material'
import { initialData } from '../database/products';
import { ProductList } from '@/components/products/ProductList';

import useSWR from 'swr'
const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json())


const HomePage = () => {

  const { data, error } = useSWR('/api/products', fetcher)



  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <ShopLayout
      title="Shop"
      pageDescription="Shop"
      imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"

    >
      <Typography variant='h1' component="h1">Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList
        products={data.products}
      />

    </ShopLayout>
  )
}

export default HomePage