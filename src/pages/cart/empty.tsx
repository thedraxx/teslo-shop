
import { ShopLayout } from '@/components/layouts'
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';

const EmptyPage = () => {
    return (
        <ShopLayout
            title="Carrito vacio"
            pageDescription="No hay articulos en el carrito, agrega productos al carrito para poder comprarlos"
        >

            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={'calc(100vh - 64px)'}
                sx={{
                    flexDirection: { xs: "column", sm: "row" }
                }}

            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100, mr: 2 }} />
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Typography variant="h1" component='h1' fontSize={50} >
                        Carrito vacio
                    </Typography>
                    <NextLink href="/" passHref>
                        <Typography
                            variant="h4"
                            component='a'
                            fontSize={50}
                            sx={{ color: 'primary.main' }}
                        >
                            {' '}Ir a la tienda
                        </Typography>
                    </NextLink>

                </Box>
            </Box>

        </ShopLayout>


    )
}

export default EmptyPage