'use client'

import { useState, useEffect } from "react"
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
import { useStore } from "../store";
import getsongInfoItem from "./getCurrentlyPlaying";
import Preloader from "./components/preloader";
import Chat from "./components/chat";

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Template({ children }) {
    const [scrollY, setScrollY] = useState(0);

    const selected = useStore(state => state.selected);
    const setSelected = useStore(state => state.setSelected);
    const songInfo = useStore(state => state.songInfo);
    const setLoading = useStore(state => state.setLoading);
    const setSongInfo = useStore(state => state.setSongInfo);
    const loading = useStore(state => state.loading);
    const showContact = useStore(state => state.showContact);
    const setShowContact = useStore(state => state.setShowContact);

    useEffect(() => {
        Promise.all([
            getsongInfoItem(
                '562f987bcb4d4371a7d3fa4915cad489',
                '8f888f1eaa61430fbb9e5e6dd8218bb1',
                'AQCMVaZY84cd5lYHZGsfItni-l5vlYwEgt_vM_yjkroWddlstTEOQPPS_lnoDrYuvs8k8FYnSZrIkckbhnFxJXxFOf_zzsfEyBcG8hdUb6faRoF79QNlxbHXOl0Sn0EnjwM'
            ),
        ]).then((results) => {
            setSongInfo(results[0]);
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

    function timeAgo(date) {
        const now = Date.now();
        const seconds = Math.floor((now - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) return `${interval}y ago`;
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return `${interval}mon ago`;
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return `${interval}d ago`;
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return `${interval}h ago`;
        interval = Math.floor(seconds / 60);
        if (interval > 1) return `${interval}m ago`;
        return `${Math.floor(seconds)} seconds ago`;
    }

    return (
        <>
            <div className="gradient min-h-[100vh] min-w-[100vw] overflow-hidden">
            </div>
            <div>
                {loading ? <Preloader /> : (
                    <>
                        <nav className="flex justify-center m-5 text-primary-green font-bold sticky top-5 z-1000">
                            <div className="scale-[65%] sm:scale-100">
                                <ul className={`navbar relative flex items-center justify-between text-xl max-w-[500px] p-2 ${clsx(scrollY > 130 && 'fixNav')}`}>
                                    <Link href='/'><li className={`px-4 py-2 navitem ${clsx(selected === 1 && 'navbarSelected')}`} onClick={() => setSelected(1)}>Home</li></Link>
                                    <Link href='/about'><li className={`px-4 py-2 navitem ${clsx(selected === 2 && 'navbarSelected')}`} onClick={() => setSelected(2)}>About</li></Link>
                                    <Link href='/projects'><li className={`px-4 py-2 navitem ${clsx(selected === 3 && 'navbarSelected')}`} onClick={() => setSelected(3)}>Projects</li></Link>
                                    <li className="px-4 py-2 navitem" onClick={() => setShowContact(!showContact)}>Contact</li>
                                </ul>
                            </div>
                        </nav>
                        <Chat />
                        {children}
                        <footer className='flex justify-center my-28 mx-10' id='contact'>
                            <div className='max-w-[900px] w-full flex gap-10 sm:gap-24 flex-col sm:flex-row'>
                                <div className="left flex-2 flex flex-col gap-9 w-full">
                                    <Link href={songInfo.songUrl || 'https://open.spotify.com/user/31k6pgzdnag74vy767bu32ldeswi'} target="_blank">
                                        <div className="spotify flex justify-start items-center gap-4 bg-[#ffffffc7] rounded-[60px] px-5 py-1 w-full h-[90px]">
                                            <Image src={'/spotify.svg'} width={50} height={50} alt='spotify' className="opacity-90" />
                                            <div className='flex flex-col justify-center h-full text-primary-green'>
                                                <p className='text-xs sm:text-sm text-primary-green opacity-90'>
                                                    {songInfo ? (songInfo.playedAt ? `Last played ${timeAgo(songInfo.playedAt)}` : songInfo.isPlaying ? 'Currently listening to' : 'Currently paused on') : 'On a break'}
                                                </p>
                                                <h3 className="font-bold text-sm sm:text-lg opacity-95 mb-[3px]">{songInfo.title || ''}</h3>
                                                <p className="text-[0.60rem] sm:text-xs -mt-2 opacity-95">{songInfo.artist}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="copyright hidden sm:block">&copy; {new Date().getFullYear()} Aksh Walia</div>
                                </div>
                                <div className="right flex-1 flex justify-center sm:justify-normal">
                                    <div className="flex flex-col justify-center gap-5">
                                        <h3 className={`${acorn.className} text-3xl text-primary-green`}>Let&apos;s talk.</h3>
                                        <ul className='flex flex-col gap-4 items-center sm:items-start'>
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
                )}
            </div>
        </>
    )
}