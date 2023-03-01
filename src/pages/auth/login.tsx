import React from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';

const LoginPage = () => {
    return (
        <AuthLayout
            title="Ingresar"
        >
            <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            iniciar Sesion
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label="Email" variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Contrasena" type="password" variant="filled" fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <Button color="secondary" className="circular-btn" size="large" variant="contained" fullWidth>
                            Ingresar
                        </Button>
                    </Grid>


                    <Grid item xs={12} display="flex" justifyContent={"end"}>
                        <NextLink href={'/auth/register'} passHref legacyBehavior>
                            <Link underline='always'>
                                No tienes cuenta?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage