import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      // Router.push("/profile");
    }, 5000);
  }, []);
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <main className="w-screen h-screen flex flex-col items-center justify-center bg-gradient_hbo">
        <Image src="/assets/logo_xl.png" alt="Logo HBO Max" width={480} height={232.26} objectFit="cover" />
        <Loading />
      </main>
    </>
  )
}

export default Home
