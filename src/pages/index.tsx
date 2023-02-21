
import { ShopLayout } from '@/components/layouts'
import { Grid, Typography, Card, CardActionArea, CardMedia } from '@mui/material'
import { initialData } from '../database/products';


const index = () => {
  return (
    <ShopLayout
      title="Shop"
      pageDescription="Shop"
      imageFullUrl="https://teslo-shop.vercel.app/images/teslo-shop-logo.png"

    >
      <Typography variant='h1' component="h1">Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>


      <Grid container spacing={4}>
        {
          initialData.products.map((product) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`../public/products/${product.images[0]}`}
                    alt={product.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))

        }


      </Grid>
    </ShopLayout>
  )
}

export default index