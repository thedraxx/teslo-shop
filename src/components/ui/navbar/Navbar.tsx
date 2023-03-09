import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRouter } from 'next/router';

export const Navbar = () => {

    const router = useRouter()

    return (
        <AppBar>
            <Toolbar>

                <NextLink
                    href="/"
                    legacyBehavior
                    passHref
                >
                    <Link display="flex" alignItems={"center"}>
                        <Typography variant="h6" >
                            Testlo
                        </Typography>
                        <Typography sx={{ ml: 0.5 }}>
                            Shop
                        </Typography>
                    </Link>
                </NextLink>

                <Box sx={{ flexGrow: 1 }} />



                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <NextLink href="/category/men" passHref legacyBehavior>
                        <Link>
                            <Button
                                color={router.asPath === '/category/men' ? 'secondary' : 'inherit'}
                            >Hombre</Button>
                        </Link>
                    </NextLink>


                    <NextLink href="/category/women" passHref legacyBehavior>
                        <Link>
                            <Button
                                color={router.asPath === '/category/women' ? 'secondary' : 'inherit'}
                            >Mujeres</Button>
                        </Link>
                    </NextLink>

                    <NextLink href="/category/kid" passHref legacyBehavior>
                        <Link>
                            <Button
                                color={router.asPath === '/category/kid' ? 'secondary' : 'inherit'}
                            >Ninos</Button>
                        </Link>
                    </NextLink>
                </Box>


                <Box sx={{ flexGrow: 1 }} />

                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>

                <NextLink href="/cart" passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>


                <Button>
                    Menu
                </Button>


            </Toolbar>
        </AppBar >
    )
}
