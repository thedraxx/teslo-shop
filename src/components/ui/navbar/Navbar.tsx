import React, { useEffect, useState, useContext } from 'react'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge, Input, InputAdornment } from '@mui/material';
import NextLink from 'next/link'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRouter } from 'next/router';
import { UiContext } from '../../../context/ui/UiContext';
import { ClearOutlined, SearchOutlined } from '@mui/icons-material';
import { CartContext } from '@/context';

export const Navbar = () => {
    const router = useRouter()
    const { toggleSideMenu } = useContext(UiContext)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const { numberOfItems } = useContext(CartContext)

    const onSearchTerm = () => {
        console.log(searchTerm)
        if (searchTerm.trim().length === 0) return
        router.push(`/search/${searchTerm}`)

    }

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



                <Box
                    className='fadeIn'
                    sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                >
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

                {/*Pantallas grandes */}

                {
                    isSearchVisible
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        ) : (
                            <IconButton
                                onClick={() => setIsSearchVisible(true)}
                                className='fadeIn'
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        )
                }



                {/*Pantallas pequenas */}
                <IconButton
                    sx={{ display: { xs: "flex", sm: "none" } }}
                    onClick={toggleSideMenu}
                >
                    <SearchOutlinedIcon />
                </IconButton>

                <NextLink href="/cart" passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={numberOfItems} color='secondary'>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>


                <Button
                    onClick={toggleSideMenu}
                >
                    Menu
                </Button>


            </Toolbar>
        </AppBar >
    )
}
