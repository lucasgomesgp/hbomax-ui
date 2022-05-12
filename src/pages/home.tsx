import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiPlay } from 'react-icons/bi';

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
            <main className="w-full h-full bg-gradient-to-r from-profile_first to-profile_secondary">
                <div className="absolute w-full h-full overflow-hidden">
                    <Image src="/assets/friends.png" alt="Menu" width={1480} height={810} layout="responsive" />
                    <BiPlay size={40} />
                </div>
                <header className="flex items-center justify-between px-7 pt-2">
                    <div className="flex  gap-10 z-10">
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
                <div className="h-screen max-w-[80%] relative top-[17rem] md_screen:top-[7rem] left-[2.8rem]">
                    <Image src="/assets/logo_friends.png" alt="Menu" width={328} height={99} objectFit="cover" />
                    <p className="text-white mt-8">NOW PLAYING</p>
                    <p className="text-white mt-1">They are back in Central Perk. For one night only.</p>
                    <div className="flex items-center gap-4 mt-4">
                        <button className="bg-gradient-to-r flex items-center  justify-center from-first via-secondary to-third w-14 h-14 rounded-full">
                            <BiPlay size={40} color="white" />
                        </button>
                        <button className="bg-[#ffffff33] rounded-full text-white font-black h-8 px-4">
                            MORE INFO
                        </button>
                    </div>
                </div>
            </main>
        </>);
}
