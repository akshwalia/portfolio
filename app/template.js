'use client'

import { useState, useEffect } from "react"
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Template({ children }) {
    const [scrollY, setScrollY] = useState(0);
    const [selected, setSelected] = useState(1);
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

            <nav className={`flex justify-center m-5 text-primary-green font-bold sticky top-5 z-1000 p `}>
                <div>
                    <ul className={`navbar flex items-center justify-between text-xl w-[500px] p-2 ${clsx(scrollY > 130 && 'fixNav')}`}>
                        <Link href='/'><li className={`px-4 py-2 navitem ${clsx(selected === 1 && 'navbarSelected')}`} onClick={() => setSelected(1)}>Home</li></Link>
                        <Link href='/about'><li className={`px-4 py-2 navitem ${clsx(selected === 2 && 'navbarSelected')}`} onClick={() => setSelected(2)}>About</li></Link>
                        <Link href='/projects'><li className={`px-4 py-2 navitem ${clsx(selected === 3 && 'navbarSelected')}`} onClick={() => setSelected(3)}>Projects</li></Link>
                        <Link href='#contact'><li className={`px-4 py-2 navitem }`}>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            {children}
            <footer className='flex justify-center my-28' id='contact'>
                <div className='max-w-[900px] w-full flex gap-24'>
                    <div className="left flex-2 flex flex-col gap-9 w-full">
                        <div className="spotify flex justify-start items-center gap-4 bg-[#ffffffc7] rounded-[60px] px-5 py-1 w-full h-[70px]">
                            <Image src='/spotify.svg' width={50} height={50} alt='spotify' className='' />
                            <div className='flex flex-col justify-center h-full text-primary-green'>
                                <p className='text-sm text-primary-green'>Currently listening to</p>
                                <h3 className={`${acorn.className} text-lg`}>The Beatles</h3>
                            </div>
                        </div>
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