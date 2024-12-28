'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import { useEffect, useState } from "react"
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useStore } from "@/store";
import Link from 'next/link';

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

export default function About() {
    const [showLocation, setShowLocation] = useState(0);

    const setSelected = useStore(state => state.setSelected);
    const songInfo = useStore(state => state.songInfo);

    useEffect(() => {
        setSelected(2);
    }, [])

    const formatTimeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) return `${interval}y ago`;
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return `${interval}m ago`;
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return `${interval}d ago`;
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return `${interval}h ago`;
        interval = Math.floor(seconds / 60);
        if (interval > 1) return `${interval}m ago`;
        return `${Math.floor(seconds)}s ago`;
    };

    return (
        <main>
            <section className='flex flex-col items-center justify-center my-10 md:mt-16 md:mb-10' id='home'>
                <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
                    <motion.h1
                        className={`${acorn.className} text-primary-green text-[8.7vw]`}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeIn' }}>
                        I&apos;m Aksh.
                    </motion.h1>

                </div>
            </section>

            <section className='flex justify-center mb-11 mx-10 md:mx-16'>
                <div className='flex justify-between items-center gap-4 sm:gap-16 max-w-[1250px] w-full flex-col md:flex-row'>
                    <motion.div
                        className="left relative"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.15 }}>
                        <div className='relative max-w-[370px] md:w-[30vw]'>
                            <Image src='/aksh3.jpg' width={370} height={800} alt='Aksh' className='rounded-tr-full rounded-tl-full md:h-[500px] object-cover object center' priority />
                            <Link href={songInfo.songUrl || 'https://open.spotify.com/user/31k6pgzdnag74vy767bu32ldeswi'}>
                                <div className='bg-primary-green h-20 w-full absolute bottom-0 flex justify-start items-center gap-5 px-6 max-w-[370px]'>
                                    <Image src='/Spotify-white.svg' width={50} height={50} alt='spotify' className='rounded-full opacity-40' />

                                    {songInfo ? (
                                        <div className='flex flex-col justify-center h-full text-white opacity-75'>
                                            <p className='text-base text-white h-[23px] overflow-y-hidden'>
                                                {songInfo.playedAt ? `Last played ${formatTimeAgo(songInfo.playedAt)}` : songInfo.isPlaying ? 'Currently listening to' : 'Currently paused on'}
                                            </p>
                                            <p className={`${acorn.className} text-lg h-[23px] overflow-y-hidden`}>{songInfo.title}</p>
                                        </div>
                                    ) : (
                                        <div className='flex flex-col justify-center h-full text-white opacity-75'>
                                            <p className='text-lg text-white overflow-y-hidden'>On a break</p>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="right flex-2.5 pt-7"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
                        <h2 className={`${acorn.className} text-primary-green text-3xl sm:text-4xl md:text-[3.3vw]`}>I&apos;m a third-year Computer Science Engineering student at Delhi Technological University, India.</h2>
                        <p className='text-primary-green text-base md:text-xl my-5'>Self-taught Full Stack Developer continuously embracing new technologies to expand my skill set. Passionate about crafting seamless digital experiences, I thrive on the dynamic nature of web development.</p>
                        <p className='text-primary-green text-base md:text-xl'>Open to freelance opportunities, I bring a dedication to learning and a knack for leveraging diverse technologies to create impactful solutions.</p>
                    </motion.div>
                </div>
            </section >

            {/* <section className='mx-10 flex flex-col gap-5 mb-14 md:mb-28'>
                <motion.div className="workbubble bg-primary-green rounded-full text-white flex justify-between items-center w-full sm:w-[30vw] px-7 py-4 self-end"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}>
                    <div>
                        <p className='font-bold text-xl'>Fresources</p>
                        <p className='text-xl'>Academic Team Member</p>
                    </div>
                    <div className={`${acorn.className} text-2xl`}>23~</div>
                </motion.div>
                <div className="workbubble bg-primary-green rounded-full text-white justify-between flex items-center w-full sm:w-[60vw] px-7 py-4">
                    <div>
                        <p className='font-bold text-xl'>Desh Ke Mentor</p>
                        <p className='text-xl'>Mentor</p>
                    </div>
                    <div className={`${acorn.className} text-2xl`}>22~23</div>
                </div>
            </section> */}

            <section className='flex flex-col sm:pr-64 mb-11 mx-10 pt-10'>
                <div className='self-end max-w-[800px]'>
                    <h3 className={`${acorn.className} text-primary-green text-2xl sm:text-[3vw] mb-5`}>Open to collaboration with a focus on sustainability, education, equality, or carbon neutrality.</h3>
                    <div className='max-w-[600px] text-primary-green opacity-95 text-base sm:text-xl'>
                        I&apos;m driven by the belief that we should leave our Earth in a better state for future generations. My aim is to contribute to these ideals in any way possible. If you share this vision, I&apos;d love to connect and discuss further.
                    </div>
                </div>
            </section>

            <section className='bg-[#ffffff3e] sm:rounded-[60px] sm:m-11 mb-10 sm:mb-20 grid grid-cols-1 sm:grid-cols-2 py-8 px-10 sm:py-28 sm:px-36 gap-16 sm:gap-10'>
                <div>
                    <p className={`${acorn.className} text-2xl sm:text-5xl text-primary-green opacity-60 mb-5`}>01</p>
                    <h4 className={`${acorn.className} text-2xl sm:text-3xl text-primary-green mb-5`}>Clear Communication and Understanding</h4>
                    <p className='text-primary-green opacity-95 text-base sm:text-xl'> I begin by thoroughly understanding my client&apos;s needs. I engage in detailed discussions, ask pertinent questions, and ensure we&apos;re aligned on the project&apos;s scope, goals, and timelines. Documenting these discussions helps avoid any future misunderstandings.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-2xl sm:text-5xl text-primary-green opacity-60 mb-5`}>02</p>
                    <h4 className={`${acorn.className} text-2xl sm:text-3xl text-primary-green mb-5`}>Regular Updates and Progress Reports</h4>
                    <p className='text-primary-green opacity-95 text-base sm:text-xl'> Throughout the project, I keep my client updated on the progress. Sharing achieved milestones and seeking feedback at crucial junctures fosters transparency in my workflow and builds trust with the client.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-2xl sm:text-5xl text-primary-green opacity-60 mb-5`}>03</p>
                    <h4 className={`${acorn.className} text-2xl sm:text-3xl text-primary-green mb-5`}>Quality Assurance and Testing</h4>
                    <p className='text-primary-green opacity-95 text-base sm:text-xl'>  I prioritize delivering high-quality work. Rigorous testing across browsers, devices, and screen sizes ensures a flawless website. By fixing bugs and optimizing performance, I showcase my commitment to excellence.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-2xl sm:text-5xl text-primary-green opacity-60 mb-5`}>04</p>
                    <h4 className={`${acorn.className} text-2xl sm:text-3xl text-primary-green mb-5`}>Punctual Delivery and Comprehensive Post-Project Support</h4>
                    <p className='text-primary-green opacity-95 text-base sm:text-xl'> I make it a priority to meet deadlines or even surpass them. Moreover, I offer post-launch support and training sessions to ensure the client feels confident managing their website. Providing ongoing assistance demonstrates my dedication to their satisfaction beyond project completion.</p>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center mb-20 mx-10 text-base sm:text-xl'>
                <div className='max-w-[700px] flex flex-col gap-7'>
                    <div className='text-primary-green '>
                        Back when I began coding, Java was my first language in the tech world. It got me curious about how stuff worked behind the scenes on computers. But then, I stumbled onto web development—a whole new world that caught my attention.
                    </div>
                    <div className='text-primary-green '>
                        Building websites became my thing. It wasn&apos;t just about making things work; it was about making them look cool and easy to use. It was like painting with pixels and code.
                    </div>
                    <div className='text-primary-green '>
                        Besides tech, I found joy in other things like drawing, singing, and taking pictures. They&apos;re my ways of expressing feelings and freezing moments in time. These hobbies blend with my love for web design, making my journey both colorful and creative. Now, I&apos;m all about crafting online experiences that people enjoy and remember.
                    </div>
                </div>
            </section>

            <section className='flex gap-10 justify-center mx-10 text-xs sm:text-base'>
                <div className='relative overflow-hidden'>
                    <Image src='/fog.jpg' width={350} height={281} alt='fog' className='rounded-2xl' onMouseOver={() => setShowLocation(1)} onMouseOut={() => setShowLocation(0)} />
                    <p className={`bg-[#ffffff5d] py-1 px-3 rounded-xl absolute left-2 md:left-5 -bottom-12 sm:-bottom-10 transition-transform ${clsx(showLocation == 1 && '-translate-y-[60px]')}`}>Delhi, India</p>
                </div>
                <div className='relative overflow-hidden hidden sm:block'>
                    <Image src='/diya.jpg' width={350} height={281} alt='diya' className='rounded-2xl' onMouseOver={() => setShowLocation(2)} onMouseOut={() => setShowLocation(0)} />
                    <p className={`bg-[#ffffff5d] py-1 px-3 rounded-xl absolute left-2 md:left-5 -bottom-12 sm:-bottom-10 transition-transform ${clsx(showLocation == 2 && '-translate-y-[60px]')}`}>Dehradun, India</p>
                </div>
                <div className='relative overflow-hidden'>
                    <Image src='/clock.jpg' width={350} height={281} alt='clock' className='rounded-2xl' onMouseOver={() => setShowLocation(3)} onMouseOut={() => setShowLocation(0)} />
                    <p className={`bg-[#ffffff5d] py-1 px-3 rounded-xl absolute left-2 md:left-5 -bottom-12 sm:-bottom-10 transition-transform ${clsx(showLocation == 3 && '-translate-y-[60px]')}`}>Dehradun, India</p>
                </div>
            </section>
        </main>
    )
}