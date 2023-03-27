import React, { useContext, useState } from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils';
import testloAPI from '@/api/testloAPI';
import { AuthContext, AuthProvider } from '@/context';
import { useRouter } from 'next/router';
import { ErrorOutlined } from '@mui/icons-material';


type FormData = {
    name: string,
    email: string,
    password: string,
}


const RegisterPage = () => {
    const router = useRouter()
    const { registerUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false)
    const [errorMesagge, setErrorMessage] = useState('')


    const onRegisterForm = async ({ name, email, password }: FormData) => {

        const { hasError, message } = await registerUser(name, email, password)

        if (hasError) {
            setShowError(true)
            setErrorMessage(message!)
            setTimeout(() => {
                setShowError(false)
            }, 3000);
            return;
        }

        return router.replace('/auth/login');

    }



    return (
        <AuthLayout
            title="Ingresar"
        >
            <form
                onSubmit={handleSubmit(onRegisterForm)}
            >


                <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Registrarse
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
                                type='name'
                                label="name"
                                variant="filled"
                                fullWidth
                                {
                                ...register('name', {
                                    required: 'El nombre es requerido',
                                })
                                }
                            />
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
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                color="secondary"
                                className="circular-btn"
                                size="large"
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                Ingresar
                            </Button>
                        </Grid>


                        <Grid item xs={12} display="flex" justifyContent={"end"}>
                            <NextLink href={'/auth/login'} passHref legacyBehavior>
                                <Link underline='always'>
                                    Ya tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout >
    )
}

export default RegisterPage