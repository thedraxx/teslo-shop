import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui/navbar';
import { SideMenu } from '../ui/SideMenu';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}


export const ShopLayout = ({ children, title, pageDescription, imageFullUrl }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:description" content={pageDescription} />
                <meta name="og:title" content={title} />
                {
                    imageFullUrl && <meta name="og:image" content={imageFullUrl} />
                }
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav>
                {/* TODO: Navbar */}
                <Navbar />
            </nav>

            {/*TODO: SideBar */}
            <SideMenu />

            <main
                style={{
                    margin: '80px auto',
                    maxWidth: '1200px',
                    padding: '0 20px',
                }}>
                {children}
            </main>

            <footer>
                {/* TODO: custom Footer */}
            </footer>

        </>
    )
}

