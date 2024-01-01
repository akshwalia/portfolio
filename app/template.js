'use client'

import { useState, useEffect } from "react"
import clsx from "clsx";
import Link from "next/link";

export default function Template({ children }) {
    const [scrollY, setScrollY] = useState(0);
    const [selected,setSelected] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <>
            <nav className={`flex justify-center m-5 text-primary-green font-bold sticky top-5 z-10 p `}>
                <div>
                    <ul className={`navbar flex items-center justify-between text-xl w-[500px] p-2 ${clsx(scrollY>130 && 'fixNav')}`}>
                        <Link href='/'><li className={`px-4 py-2 navitem ${clsx(selected===1 && 'navbarSelected')}`} onClick={()=> setSelected(1)}>Home</li></Link>
                        <Link href='/about'><li className={`px-4 py-2 navitem ${clsx(selected===2 && 'navbarSelected')}`} onClick={()=> setSelected(2)}>About</li></Link>
                        <Link href='/projects'><li className={`px-4 py-2 navitem ${clsx(selected===3 && 'navbarSelected')}`} onClick={()=> setSelected(3)}>Projects</li></Link>
                        <Link href='#skills'><li className={`px-4 py-2 navitem ${clsx(selected===4 && 'navbarSelected')}`} onClick={()=> setSelected(4)}>Skills</li></Link>
                        <Link href='#contact'><li className={`px-4 py-2 navitem ${clsx(selected===5 && 'navbarSelected')}`} onClick={()=> setSelected(5)}>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            {children}
        </>
    )
}