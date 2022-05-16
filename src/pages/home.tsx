/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BiPlay } from 'react-icons/bi';
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
    const [typeUser, setTypeUser] = useState<"man" | "woman" | string>("");
    const router = useRouter();
    useEffect(() => {
        const userStoraged = localStorage.getItem("type_user");
        if (userStoraged) {
            setTypeUser(userStoraged);
        }
    }, []);

    function handleRedirectToHome() {
        router.reload();
    }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className="w-full h-full overflow-hidden  bg-gradient_profile bg-no-repeat bg-left-top bg-cover">
                <header className="absolute flex items-center justify-between px-7 pt-2 pb-1 w-full  hover:bg-black z-20">
                    <div className="flex  gap-10  ">
                        <button>
                            <Image className="hover:p-2" src="/assets/menu.png" alt="Menu" layout="fixed" width={20} height={20} />
                        </button>
                        <button>
                            <Image className="hover:p-2" src="/assets/search.png" alt="Buscar" layout="fixed" width={20} height={20} />
                        </button>
                    </div>
                    <button onClick={() => { handleRedirectToHome() }}>
                        <Image className="hover:p-2" src="/assets/logo.png" alt="Logo HBO Max" objectFit="cover" width={129.31} height={22} />
                    </button>
                    <button className="flex gap-1.5 items-center justify-center hover:gap-2 transition-all">
                        {typeUser === "man" ? (
                            <>
                                <Image className="hover:p-2" src="/assets/avatar1.png" height={40} width={40} alt="Perfil masculino" objectFit="cover" />
                                <span className="text-white font-black">Jon</span>
                            </>
                        ) : (
                            <>
                                <Image className="hover:p-2" src="/assets/avatar2.png" height={40} width={40} alt="Perfil feminino" objectFit="cover" />
                                <span className="text-white font-black">Sansa</span>

                            </>
                        )}
                    </button>
                </header>
                <section className="h-screen max-w-[80%] relative top-[17rem] md_screen:top-[7rem] left-[2.8rem] z-20">
                    <Image className="hover:p-2" src="/assets/logo_friends.png" alt="Menu" width={328} height={99} objectFit="cover" />
                    <p className="text-white mt-8">NOW PLAYING</p>
                    <p className="text-white mt-1">They are back in Central Perk. For one night only.</p>
                    <div className="flex items-center gap-4 mt-4">
                        <button className="bg-gradient-to-r flex items-center  justify-center from-first via-secondary to-third w-14 h-14 rounded-full hover:bg-gradient-to-b hover:scale-90 transition ">
                            <BiPlay size={40} color="white" />
                        </button>
                        <button className="bg-[#ffffff33] rounded-full text-white font-black h-8 px-4 hover:bg-hover_purple hover:px-5 hover:py-1 transition-all">
                            MORE INFO
                        </button>
                    </div>
                </section>
                <section className="absolute top-0 w-full h-full z-10">
                    <Image className="hover:p-2" src="/assets/friends.png" alt="Friends" width={1480} height={810} layout="responsive" />
                </section>
                <section className="flex relative flex-col mt-[221px] left-32 gap-6">
                    <div className="flex gap-1 items-center">
                        <h3 className="text-white text-xl font-bold">
                            New and Trending
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3">
                        <Image className="hover:p-2" src="/assets/tom_jerry.png" alt="Tom e Jerry" width={548} height={307} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/gossip.png" alt="Gossip Girl" width={548} height={307} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/raised.png" alt="Raised by Wolves" width={548} height={307} objectFit="cover" />
                    </div>
                </section>
                <section className="flex flex-col mt-[4.5rem] relative left-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Movies We Love
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3">
                        <Image className="hover:p-2" src="/assets/conjuring.png" alt="The Conjuring" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/sudden.png" alt="No Sudden Move" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/tom_jerry_capa.png" alt="Tom & Jerry" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/secret_garden_capa.png" alt="The Secret Garden" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/let_them.png" alt="Let Them All Talk" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/justice_league.png" alt="Justice League" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/guns.png" alt="Guns" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="flex mt-[3.06rem] relative left-[3.4rem]">
                    <div className="flex items-start justify-center flex-col gap-3">
                        <h3 className="text-white font-bold text-[2rem]">
                            Essential Series
                        </h3>
                        <p className="text-white text-base font-normal">
                            Your favorite shows, beloved characters, and
                            unforgettable stories.
                        </p>
                        <button className="font-bold text-white font-sans text-[1.125rem] leading-[1.3125rem] bg-btn px-[1.25rem] py-[0.625rem] rounded-full">
                            BROWSE ALL
                        </button>
                    </div>
                    <div className="flex gap-3 relative left-[4rem]">
                        <Image className="hover:p-2" src="/assets/got.png" alt="Game of Thrones" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/big_bang.png" alt="The Big Bang Theory" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/sex_and_city.png" alt="Sex and The City" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/love_life.png" alt="Love Life" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="flex relative flex-col mt-12 left-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Star Power
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-[1.375rem]">
                        <Image className="hover:p-2" src="/assets/will.png" alt="Will Smith" width={281} height={422} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/jennifer.png" alt="Jennifer Aniston" width={281} height={422} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/margot.png" alt="Margot Robbie" width={281} height={422} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/christopher.png" alt="Christopher Nolan" width={281} height={422} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/tom_hanks.png" alt="Tom Hanks" width={281} height={422} objectFit="cover" />
                    </div>
                </section>
                <section className="flex flex-col mt-20 relative left-[3.4rem]">
                    <div className="flex gap-1 items-center mb-[1.375rem]">
                        <h3 className="text-white text-xl font-bold">
                            Harry Potter and Other Fantastic Universes
                        </h3>
                        <IoIosArrowForward size={20} color="white" />
                    </div>
                    <div className="flex gap-3">
                        <Image className="hover:p-2" src="/assets/harry.png" alt="Harry Potter" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/fantastic.png" alt="Fantastic Beasts" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/lord.png" alt="The Lord Of The Rings" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/hunger_games.png" alt="The Hunger Games" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/catching_fire_2.png" alt="The Hunger Games Catching Fire 2" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/mockingjay_3.png" alt="The Hunger Games Mockingjay Part I" width={200} height={300} objectFit="cover" />
                        <Image className="hover:p-2" src="/assets/mockingjay_4.png" alt="The Hunger Games Mockingjay Part II" width={200} height={300} objectFit="cover" />
                    </div>
                </section>
                <section className="relative flex flex-wrap items-center justify-center mt-[8.75rem] w-full">
                    <div className="absolute z-10">
                        <Image src="/assets/overlay_footer.png" alt="Overlay Gossip Girl" width={1970} height={584} objectFit="cover" />
                    </div>
                    <div className="flex flex-col">
                        <div className=" relative z-20 flex gap-3 mb-1">
                            <Image className="hover:p-2" src="/assets/max_originals.png" alt="Max Originals" layout="fixed" width={60} height={26} />
                            <p className="text-white text-base text=[rgba(255, 255, 255, 0.7)] font-bold">
                                GOSSIP GIRL: THE BAD WITCH
                            </p>
                        </div>
                        <div className=" relative z-20 flex flex-col items-start justify-center">
                            <h2 className="mb-3 text-white text-[2rem] font-bold">
                                Hello again, Upper East Siders.
                            </h2>
                            <p className="mb-3 text-white">
                                Your one and only source into the scandalous lives of Manhattan's
                                elite is back, with a new cast.
                            </p>
                            <button className="text-white font-sans font-bold leading-[1.3125rem] tracking-[1.5px] bg-btn px-[1.25rem] py-[0.625rem] rounded-full">
                                WATCH NOW
                            </button>
                        </div>
                    </div>
                    <div className="relative z-20">
                        <Image className="hover:p-2" src="/assets/footer.png" alt="Game of Thrones" width={360} height={360} objectFit="cover" />
                    </div>
                </section>
            </main>
        </>);
}
