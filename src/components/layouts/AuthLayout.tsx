import Head from 'next/head'
import React from 'react'
import { Box } from '@mui/material';


interface Props {
    children: React.ReactNode;
    title: string;
}

export const AuthLayout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    {children}
                </Box>
            </main>

        </>
    )
}

