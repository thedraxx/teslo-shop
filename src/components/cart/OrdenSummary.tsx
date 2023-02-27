import React from 'react'
import { Grid, Typography } from '@mui/material';

export const OrdenSummary = () => {
    return (

        <Grid container>

            <Grid item xs={6}>
                <Typography>
                    No Productos
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    3 items
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>
                    Subtotal
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    {`$${105.36}`}
                </Typography>
            </Grid>


            <Grid item xs={6}>
                <Typography>
                    Impuestos
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Typography>
                    {`$${35.34}`}
                </Typography>
            </Grid>


            <Grid item xs={6} sx={{ mt: 5 }}>
                <Typography variant='subtitle1'>
                    Total A Pagar
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"} sx={{ mt: 5 }}>
                <Typography variant='subtitle1'>
                    {`$${215.34}`}
                </Typography>
            </Grid>
        </Grid>
    )
}
