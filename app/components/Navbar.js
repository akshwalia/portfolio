'use client'

import Link from 'next/link';
import { useStore } from '@/store';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);

    const showContact = useStore(state => state.showContact);
    const setShowContact = useStore(state => state.setShowContact);
    const selected = useStore(state => state.selected);
    const setSelected = useStore(state => state.setSelected);

    const navRefs = useRef([]);
    const highlightRef = useRef(null);
    const navContainerRef = useRef(null);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const currentIndex = navItems.findIndex(item => item.href === pathname);
        if (currentIndex !== -1) {
            setSelected(currentIndex);
        }
    }, [pathname]);

    useEffect(() => {
        if (!highlightRef.current || !navRefs.current[selected]) return;

        const updateHighlight = () => {
            const currentItem = navRefs.current[selected];
            const navContainer = navContainerRef.current;

            if (currentItem && navContainer) {
                const itemRect = currentItem.getBoundingClientRect();
                const containerRect = navContainer.getBoundingClientRect();

                highlightRef.current.style.width = `${itemRect.width}px`;
                highlightRef.current.style.transform = `translateX(${itemRect.left - containerRect.left}px)`;
            }
        };

        // Initial update
        updateHighlight();

        // Update on window resize
        window.addEventListener('resize', updateHighlight);
        return () => window.removeEventListener('resize', updateHighlight);
    }, [selected]);


    const handleNavClick = (index) => {
        if (index === 3) {
            setShowContact(!showContact);
        }
        else
            setSelected(index);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <nav className="flex justify-center m-5 text-primary-green font-bold sticky top-5 z-[1000]">
            <ul ref={navContainerRef} className={`navbar relative flex items-center justify-between text-sm sm:text-xl max-w-[500px] py-3 sm:py-4 px-2 ${clsx(scrollY > 120 && 'fixNav')}`}>
                {navItems.map((item, index) => (
                    <li
                        key={item.name}
                        ref={el => navRefs.current[index] = el}
                        className={
                            ' navitem cursor-pointer transition-colors duration-200 z-[100]'
                        }
                        onClick={() => handleNavClick(index)}
                    >
                        {item.href.startsWith('#') ? (
                            <span className='px-3 sm:px-4 py-2'>{item.name}</span>
                        ) : (
                            <Link href={item.href} className='px-3 sm:px-4 py-2'>{item.name}</Link>
                        )}
                    </li>
                ))}
                <div
                    ref={highlightRef}
                    className="absolute h-[2rem] sm:h-[2.8rem] border-2 border-primary-green left-0 bg-white rounded-full transition-all duration-300 ease-in-out -z-10"
                />
            </ul>
        </nav>
    )
};