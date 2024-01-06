'use client'

import { useState, useEffect } from "react"
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
import { useStore } from "../store";
import getNowPlayingItem from "./getCurrentlyPlaying";
import Preloader from "./components/preloader";

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Template({ children }) {
    const [scrollY, setScrollY] = useState(0);

    const selected = useStore(state => state.selected);
    const setSelected = useStore(state => state.setSelected);
    const nowPlaying = useStore(state => state.nowPlaying);
    const setLoading = useStore(state => state.setLoading);
    const setNowPlaying = useStore(state => state.setNowPlaying);
    const loading = useStore(state => state.loading);

    useEffect(() => {

        Promise.all([
            getNowPlayingItem(
                '84ad7df739fe4534840ec0379140813a',
                '1a0e5f8a157f48c8a6bd7c396181121b',
                'AQAySRaTcGIXQihC8lfmNxnZEm46lFA3puKd4xLXnFpwYsRkoFXadHBg_R7c_8Bu4_cF3rVeWq8AHZPJ4D1inB1mYqOy9i9zD1DaVclR97AMSMbAht1pdEDN16uHBRjZA54'
            ),
        ]).then((results) => {
            console.log(results[0]);
            setNowPlaying(results[0]);
            setLoading(false);
        });

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);


    return (
        <>
            <div className="gradient h-[110vh] w-screen max-w-screen overflow-hidden">

            </div>

            <nav className={`flex justify-center m-5 text-primary-green font-bold sticky top-5 z-1000 `}>
                <div>
                    <ul className={`navbar relative flex items-center justify-between text-xl w-[500px] p-2 ${clsx(scrollY > 130 && 'fixNav')}`}>
                        <Link href='/'><li className={`px-4 py-2 navitem ${clsx(selected === 1 && 'navbarSelected')}`} onClick={() => setSelected(1)}>Home</li></Link>
                        <Link href='/about'><li className={`px-4 py-2 navitem ${clsx(selected === 2 && 'navbarSelected')}`} onClick={() => setSelected(2)}>About</li></Link>
                        <Link href='/projects'><li className={`px-4 py-2 navitem ${clsx(selected === 3 && 'navbarSelected')}`} onClick={() => setSelected(3)}>Projects</li></Link>
                        <Link href='#contact'><li className={`px-4 py-2 navitem }`}>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            {loading?<Preloader/>: children}
            <footer className='flex justify-center my-28' id='contact'>
                <div className='max-w-[900px] w-full flex gap-24'>
                    <div className="left flex-2 flex flex-col gap-9 w-full">
                        <Link href={nowPlaying.songUrl || 'https://youtu.be/dQw4w9WgXcQ?si=coC3Y8j3gbuuPeoq'}>
                            <div className="spotify flex justify-start items-center gap-4 bg-[#ffffffc7] rounded-[60px] px-5 py-1 w-full h-[90px]">
                                <Image src={'/spotify.svg'} width={50} height={50} alt='spotify' />
                                <div className='flex flex-col justify-center h-full text-primary-green'>
                                    <p className='text-sm text-primary-green'>{nowPlaying ? 'Currently listening to' : 'On a break'}</p>
                                    <h3 className={`font-bold text-lg`}>{nowPlaying.title || ''}</h3>
                                    <p className="text-xs -mt-2">{nowPlaying.artist}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="copyright">&copy; {new Date().getFullYear()} Aksh Walia </div>
                    </div>
                    <div className="right flex-1">
                        <div className="flex flex-col justify-center gap-5">
                            <h3 className={`${acorn.className} text-3xl text-primary-green`}>Let&apos;s talk.</h3>
                            <ul className='flex flex-col gap-4'>
                                <a href="mailto:akshwalia20@gmail.com?subject=Portfolio Inquiry&body=Hello,%0D%0A%0D%0AI came across your portfolio and wanted to connect regarding potential opportunities. Looking forward to discussing further.%0D%0A%0D%0ARegards,%0D%0A[Your Name]" className='text-[#025a4eda] hover:text-primary-green'>Mail</a>
                                <a href="https://www.linkedin.com/in/aksh-walia-aa6b3b20b/" className='text-[#025a4eda] hover:text-primary-green'>LinkedIn</a>
                                <a href="https://github.com/akshwalia" className='text-[#025A4Eda] hover:text-primary-green'>Github</a>
                                <a href="https://www.instagram.com/akshwalia_/" className='text-[#025A4Eda] hover:text-primary-green'>Instagram</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}