import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [typeUser, setTypeUser] = useState<"man" | "woman" | string>("");
    useEffect(() => {
        const userStoraged = localStorage.getItem("type_user");
        if (userStoraged) {
            setTypeUser(userStoraged);
        }
    }, []);
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className="w-screen h-screen bg-gradient-to-r from-profile_first to-profile_secondary overflow-scroll">
                <Image src="/assets/friends.png" alt="Menu" layout="fill" />
                <header className="flex items-center justify-between px-7">
                    <div className="flex gap-10 pt-6 z-10">
                        <button>
                            <Image src="/assets/menu.png" alt="Menu" layout="fixed" width={20} height={20} />
                        </button>
                        <button>
                            <Image src="/assets/search.png" alt="Buscar" layout="fixed" width={20} height={20} />
                        </button>
                    </div>
                    <Image src="/assets/logo.png" alt="Logo HBO Max" objectFit="cover" width={129.31} height={22} />
                    <button className="flex gap-1.5 items-center justify-center hover:gap-2 transition-all z-10">
                        {typeUser === "man" ? (
                            <>
                                <Image src="/assets/avatar1.png" height={40} width={40} alt="Perfil masculino" objectFit="cover" />
                                <span className="text-white font-black">Felipe</span>
                            </>
                        ) : (
                            <>
                                <Image src="/assets/avatar2.png" height={40} width={40} alt="Perfil feminino" objectFit="cover" />
                                <span className="text-white font-black">Mylenna</span>

                            </>
                        )}
                    </button>
                </header>
            </main>
        </>);
}
