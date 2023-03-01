import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullname', headerName: 'nombre Completo', width: 300, sortable: false },
    {
        field: 'paid',
        headerName: 'Pagado',
        width: 150,
        sortable: false,
        renderCell: (params) => {
            return (
                params.row.paid
                    ? <Typography variant='body1' color='success'>Pagado</Typography>
                    : <Typography variant='body1' color='error'>No Pagado</Typography>
            )
        }

    },
    {
        field: 'orden',
        headerName: 'orden',
        width: 150,
        sortable: false,
        renderCell: (params) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Button variant='contained' color='primary'>Ir a la orden</Button>
                </NextLink>
            )
        }

    }
];

const row = [
    { id: 1, paid: true, fullname: 'Juan Perez' },
    { id: 2, paid: false, fullname: 'Melisa Perez' },
    { id: 3, paid: true, fullname: 'Juan Perez' },
    { id: 4, paid: true, fullname: 'sech Perez' },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title='Historial de Ordenes'
            pageDescription='Historial de ordenes del cliente'
        >
            <Typography variant='h1'>Historial de Ordenes</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sx={{
                    height: 650,
                    width: '100%',
                }}>

                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />


                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage