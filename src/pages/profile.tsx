import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiPlus } from "react-icons/bi";
interface User {
    type: "man" | "woman";
}
export default function Profile() {
    const router = useRouter();

    function handleRedirectToHome(user: User) {
        const { type } = user;
        router.push("/home");
        localStorage.removeItem("type_user");
        localStorage.setItem("type_user", type);
    }
    return (
        <>
            <Head>
                <title>Escolhe sua conta</title>
            </Head>
            <main className="w-screen h-screen bg-gradient_profile flex flex-col items-center justify-between">
                <div className="flex flex-col gap-10 mt-10 items-center justify-center">
                    <Image src="/assets/logo.png" alt="Logo HBO Max" objectFit="cover" width={128.54} height={22} />
                    <p className="text-white text-5xl font-normal ">Who Is Watching?</p>
                </div>
                <div className="flex flex-wrap gap-[81px] items-center justify-center">
                    <button className="flex flex-col gap-[21px] items-center justify-center" onClick={() => { handleRedirectToHome({ type: "man" }) }}>
                        <Image className="hover:brightness-50 transition-all" src="/assets/avatar1.png" alt="Perfil masculino" objectFit="cover" width={165} height={165} />
                        <p className="text-base text-white">Felipe</p>
                    </button>
                    <button className="flex flex-col gap-[21px] items-center justify-center" onClick={() => { handleRedirectToHome({ type: "woman" }) }}>
                        <Image className="hover:brightness-50 transition-all" src="/assets/avatar2.png" alt="Perfil feminino" objectFit="cover" width={165} height={165} />
                        <p className="text-base text-white">Mylenna</p>
                    </button>
                </div>
                <div className="flex flex-col gap-8 mt-12 items-center justify-center">
                    <div className="flex flex-wrap gap-8 items-center justify-center">
                        <button className="flex items-center justify-center gap-4 text-white font-bold bg-[#ffffff33] hover:bg-[#ffffff] hover:text-black transition p-3.5 w-[12.625rem] rounded-full">
                            <BiPlus size={24} color="white" />
                            ADULT
                        </button>
                        <button className="flex items-center justify-center gap-4 text-white font-bold bg-[#ffffff33] hover:bg-[#ffffff] hover:text-black transition p-3.5 w-[12.625rem] rounded-full">
                            <BiPlus size={24} color="white" />
                            KID
                        </button>
                    </div>
                    <button className="text-[#9E86FF] text-sm font-bold">MANAGER PROFILES</button>
                </div>
            </main>
        </>)
}
