import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function Profile() {
    return (
        <>
            <Head>
                <title>Escolhe sua conta</title>
            </Head>
            <main className="w-screen h-screen bg-gradient-to-b from-profile_first to-profile_secondary flex flex-col items-center justify-between">
                <div className="flex flex-col gap-10 mt-10 items-center justify-center">
                    <Image src="/assets/logo.png" alt="Logo HBO Max" objectFit="cover" width={128.54} height={22} />
                    <p className="text-white text-5xl font-normal ">Who Is Watching?</p>
                </div>
                <div className="flex flex-wrap gap-[81px] items-center justify-center">
                    <button className="flex flex-col gap-[21px] items-center justify-center">
                        <Image className="hover:backdrop-contrast-100" src="/assets/avatar1.png" alt="Perfil masculino" objectFit="cover" width={165} height={165} />
                        <p className="text-base text-white">Felipe</p>
                    </button>
                    <button className="flex flex-col gap-[21px] items-center justify-center">
                        <Image className="hover:backdrop-contrast-100" src="/assets/avatar2.png" alt="Perfil feminino" objectFit="cover" width={165} height={165} />
                        <p className="text-base text-white">Mylenna</p>
                    </button>
                </div>
                <div className="flex flex-col gap-8 mt-12 items-center justify-center">
                    <div className="flex flex-wrap gap-8 items-center justify-center">
                        <button className="text-white font-bold bg-[#ffffff33] hover:bg-[#ffffff] hover:text-black transition p-3.5 w-[12.625rem] rounded-full">+ ADULT</button>
                        <button className="text-white font-bold bg-[#ffffff33] hover:bg-[#ffffff] hover:text-black transition p-3.5 w-[12.625rem] rounded-full">+ KID</button>
                    </div>
                    <button className="text-[#9E86FF] text-sm font-bold">MANAGER PROFILES</button>
                </div>
            </main>
        </>)
}
