
import { Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '@/context';
import { formatCurrency } from '@/utils/currency';

export const OrdenSummary = () => {

    const {
        numberOfItems,
        Subtotal,
        taxRate,
        total,
    } = useContext(CartContext)

    return (

        <Grid container>

            <Grid item xs={6}>
                <Typography>
                    No Productos
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    {
                        numberOfItems
                    }
                    {
                        numberOfItems > 1 ? ' Productos' : ' Producto'
                    }
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>
                    Subtotal:
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    {`${formatCurrency(Subtotal)}`}
                </Typography>
            </Grid>


            <Grid item xs={6}>
                <Typography>
                    Impuestos
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    {`${process.env.NEXT_PUBLIC_TAX_RATE} %`}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 5 }}>
                <Typography variant='subtitle1'>
                    Total A Pagar
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"} sx={{ mt: 5 }}>
                <Typography variant='subtitle1'>
                    {`${formatCurrency(total)}`}
                </Typography>
            </Grid>
        </Grid>
    )
}
