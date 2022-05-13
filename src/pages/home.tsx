import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiPlay } from 'react-icons/bi';
import { IoIosArrowForward } from "react-icons/io";

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
            <main className="w-full h-full bg-gradient-to-r from-profile_first to-profile_secondary overflow-hidden">
                <section className="absolute w-full h-full overflow-hidden">
                    <Image src="/assets/friends.png" alt="Menu" width={1480} height={810} layout="responsive" />
                    <BiPlay size={40} />
                </section>
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
                <section className="h-screen max-w-[80%] relative top-[17rem] md_screen:top-[7rem] left-[2.8rem]">
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
                </section>
                <section className="flex relative flex-col mt-[221px] left-32 gap-6">
                    <div className="flex gap-1 items-center">
                        <h3 className="text-white text-xl font-bold">
                            New and Trending
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3 overflow-scroll">
                        <Image src="/assets/tom_jerry.png" alt="Tom e Jerry" width={548} height={307} objectFit="cover" />
                        <Image src="/assets/gossip.png" alt="Gossip Girl" width={548} height={307} objectFit="cover" />
                        <Image src="/assets/raised.png" alt="Raised by Wolves" width={548} height={307} objectFit="cover" />
                    </div>
                </section>
                <section className="flex flex-col mt-[4.5rem] pl-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Movies We Love
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3">
                        <Image src="/assets/conjuring.png" alt="The Conjuring" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/sudden.png" alt="No Sudden Move" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/tom_jerry_capa.png" alt="Tom & Jerry" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/secret_garden_capa.png" alt="The Secret Garden" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/let_them.png" alt="Let Them All Talk" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/justice_league.png" alt="Justice League" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/guns.png" alt="Guns" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="flex mt-[3.06rem] pl-[3.4rem]">
                    <div className="flex items-start justify-center flex-col gap-3">
                        <h3 className="text-white font-bold text-[2rem]">
                            Essential Series
                        </h3>
                        <p className="text-white text-base">
                            Your favorite shows, beloved characters, and
                            unforgettable stories.
                        </p>
                        <button className="font-bold text-white">
                            BROWSE ALL
                        </button>
                    </div>
                    <div className="flex gap-3 relative left-[4rem]">
                        <Image src="/assets/got.png" alt="Game of Thrones" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/big_bang.png" alt="The Big Bang Theory" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/sex_and_city.png" alt="Sex and The City" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/love_life.png" alt="Love Life" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="flex relative flex-col mt-12 pl-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Star Power
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-[1.375rem]">
                        <Image src="/assets/will.png" alt="Will Smith" width={281} height={422} objectFit="cover" />
                        <Image src="/assets/jennifer.png" alt="Jennifer Aniston" width={281} height={422} objectFit="cover" />
                        <Image src="/assets/margot.png" alt="Margot Robbie" width={281} height={422} objectFit="cover" />
                        <Image src="/assets/christopher.png" alt="Christopher Nolan" width={281} height={422} objectFit="cover" />
                        <Image src="/assets/tom_hanks.png" alt="Tom Hanks" width={281} height={422} objectFit="cover" />
                    </div>
                </section>
                <section className="flex flex-col mt-20 pl-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Harry Potter and Other Fantastic Universes
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3">
                        <Image src="/assets/harry.png" alt="Harry Potter" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/fantastic.png" alt="Fantastic Beasts" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/lord.png" alt="The Lord Of The Rings" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/hunger_games.png" alt="The Hunger Games" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/catching_fire_2.png" alt="The Hunger Games Catching Fire 2" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/mockingjay_3.png" alt="The Hunger Games Mockingjay Part I" width={200} height={300} objectFit="cover" />
                        <Image src="/assets/mockingjay_4.png" alt="The Hunger Games Mockingjay Part II" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="flex flex-wrap items-center justify-center mt-[8.75rem]">
                    <div className="flex flex-col">
                        <div className="flex gap-3 mb-1">
                            <Image src="/assets/max_originals.png" alt="Max Originals" layout="fixed" width={60} height={26} />
                            <p className="text-white text-base text=[rgba(255, 255, 255, 0.7)] font-bold">
                                GOSSIP GIRL: THE BAD WITCH
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="mb-3 text-white text-[2rem] font-bold">
                                Hello again, Upper East Siders.
                            </h2>
                            <p className="mb-3 text-white">
                                Your one and only source into the scandalous lives of Manhattan's
                                elite is back, with a new cast.
                            </p>
                            <button className="text-white">
                                WATCH NOW
                            </button>
                        </div>
                    </div>
                    <Image src="/assets/footer.png" alt="Game of Thrones" width={360} height={360} objectFit="cover" />
                </section>
            </main>
        </>);
}
