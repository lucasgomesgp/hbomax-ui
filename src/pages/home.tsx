import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <header className="flex items-center justify-center">
                <div className="flex gap-10 pt-6 ">
                    <Image src="/assets/menu.png" alt="Menu" layout="fixed" width={20} height={20} />
                    <Image src="/assets/search.png" alt="Buscar" layout="fixed" width={20} height={20} />
                </div>
            </header>
        </>)
}
