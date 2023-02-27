import React from 'react'
import { ShopLayout } from '@/components/layouts';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, Button } from '@mui/material';

const AddressPage = () => {
    return (
        <ShopLayout
            title="Direccion"
            pageDescription="Confirmar Direccion del destino"
        >

            <Typography variant='h1' component={"h1"}>Direccion</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>

                <Grid item xs={12} sm={6}>
                    <TextField label="nombre" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Apellido" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Direccion" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Direccion 2" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label="Codigo Postal" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Ciudad" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant='filled'>
                        <Select
                            variant='filled'
                            label="pais"
                            value={1}
                        >
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={1}>Mexico</MenuItem>
                            <MenuItem value={1}>Salvador</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Telefono" variant='filled' fullWidth />
                </Grid>
            </Grid>

            <Box
                sx={{ mt: 5 }}
                display={'flex'}
                justifyContent={'flex-end'}
            >
                <Button
                    color="secondary"
                    className='circular-btn' size='large' variant='contained'
                >
                    Revisar Pedido
                </Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage