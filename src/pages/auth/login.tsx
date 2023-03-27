import React, { useContext, useState } from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils';
import testloAPI from '../../api/testloAPI';
import { ErrorOutlined } from '@mui/icons-material';
import { AuthContext } from '../../context/auth/AuthContext';
import { useRouter } from 'next/router';


type FormData = {
    email: string,
    password: string,
};

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false)
    const { loginUser } = useContext(AuthContext)

    const onLoginUser = async ({ email, password }: FormData) => {
        setShowError(false)


        const isValidLogin = await loginUser(email, password);

        if (!isValidLogin) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000);
            return;
        }

        return router.replace('/');

        // TODO: navegar a la pantalla que el usuario estaba
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
                            {
                                showError && (
                                    <Chip
                                        label="No reconocemos ese usuario / contrasena"
                                        color="error"
                                        variant="outlined"
                                        icon={<ErrorOutlined />}
                                        className='fade-in'
                                    />
                                )
                            }

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