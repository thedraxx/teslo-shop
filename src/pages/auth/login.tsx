import React from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils';
import axios from 'axios';
import testloAPI from '../../api/testloAPI';


type FormData = {
    email: string,
    password: string,
};

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onLoginUser = async ({ email, password }: FormData) => {

        try {

            const { data } = await testloAPI.post('/user/login', {
                email,
                password
            })
            const { token, user } = data
            console.log(token, user)


        } catch (error) {
            console.log(error)
        }


    }


    return (
        <AuthLayout
            title="Ingresar"
        >
            <form
                onSubmit={handleSubmit(onLoginUser)}
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
                            <TextField
                                type='email'
                                label="Email"
                                variant="filled"
                                fullWidth
                                {
                                ...register('email', {
                                    required: 'El email es requerido',
                                    validate: validations.isEmail
                                })
                                }
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contrasena"
                                type="password"
                                variant="filled"
                                fullWidth
                                {...register('password', {
                                    required: 'La contrasena es requerida',
                                    minLength: {
                                        value: 6, message: 'La contrasena debe tener al menos 6 caracteres'
                                    },
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                color="secondary"
                                className="circular-btn"
                                size="large"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
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
            </form>
        </AuthLayout>
    )
}

export default LoginPage