'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useStore } from '@/store';
import { useEffect } from 'react';

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

export default function Projects() {
    const setSelected = useStore(state => state.setSelected);

    useEffect(() => {
        setSelected(3);
    }, []);

    return (
        <main>
            <section className='flex flex-col items-center justify-center mx-11 my-10 md:my-28' id='home'>
                <div className='flex flex-col items-center justify-center px-[15vw] md:px-[15vh] py-[2vh] relative w-fit'>
                    <motion.h1 className={`${acorn.className} text-primary-green text-6xl md:text-[8.7vw]`}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeIn' }}>Play.</motion.h1>
                    <motion.div
                        className='absolute right-0 top-0 star w-[60px] h-[60px]'
                        initial={{ transform: 'scale(0)' }}
                        animate={{ transform: 'scale(1)' }}
                        transition={{ duration: 1, ease: 'backInOut', delay: 0.3 }}>
                        <Image src='/star.svg' alt='star' width={65} height={65} className='scale-[60%] md:scale-100'/>
                    </motion.div>
                </div>
                <motion.p className='text-base md:text-xl text-primary-green max-w-[700px] text-center mt-8'
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>A collection of tools and sites I&apos;ve created, designed to be helpful, fun, & sometimes just a little bit weird.</motion.p>
            </section>

            <motion.section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-11 gap-7'
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeIn', delay: 0.4 }}>
                <div className="left border-solid flex flex-col gap-7">
                    <a href="https://chat-it-temp.vercel.app/" target='_blank' className="projectcard bg-[#ffffff60] flex-1 rounded-3xl py-2 px-8 flex items-center justify-center">
                        <div className='flex justify-between items-center'>
                            <div className='h-full flex flex-col flex-1 justify-center py-3 md:py-0'>
                                <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>ChatIt</h4>
                                <p className='text-primary-green opacity-90'> Join live chats instantly! Connect, converse, and engage in real-time discussions on our dynamic platform.</p>
                            </div>
                            <Image src='/chatIcon.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px] rounded-full' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/calculator/" target='_blank' className="projectcard bg-[#ffffff60] flex-2 rounded-3xl p-8 relative overflow-hidden">
                        <div className='min-h-[250px] md:h-auto'>
                            <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>Calculator</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Effortless calculations await! Crunch numbers swiftly on our user-friendly online calculator.</p>
                            <Image src='/calculator.png' width={200} height={250} alt='calculator' className='flex-grow-0 flex-shrink-0 absolute left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                </div>
                <div className="centre border-solid flex flex-col gap-7">
                    <a href="https://pokemon-memory-card.vercel.app/" target='_blank' className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center py-3 md:py-0'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-3'>Pokémemo</h4>
                                <p className='text-primary-green opacity-90'> Gotta Remember &apos;Em All! Can You Uncover &apos;Em Without A Second Poke?</p>
                            </div>
                            <Image src='/pokeball.png' width={110} height={0} alt='pokeball' className='flex-grow-0 flex-shrink-0 h-[110px]' />
                        </div>
                    </a>
                    <a href="http://where-pikachu.vercel.app/" target='_blank' className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center py-3 md:py-0'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>Where&apos;s Pikachu</h4>
                                <p className='text-primary-green opacity-90'> Scan the crowded image, spot the requested Pokemon, and test your eye for detail!</p>
                            </div>
                            <Image src='/greatball.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px]' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/JS-Drum-Kit/" target='_blank' className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center py-3 md:py-0'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>Drum Kit</h4>
                                <p className='text-primary-green opacity-90'> Experience drums at your fingertips! Tap keys for instant drum sounds on our interactive website.</p>
                            </div>
                            <Image src='/drumkit.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px]' />
                        </div>
                    </a>
                </div>
                <div className="right border-solid flex flex-col gap-7 md:col-span-2 md:flex-row xl:col-span-1 xl:flex-col">
                    <a href="https://akshwalia.github.io/tic-tac-toe/" target='_blank' className="projectcard bg-[#ffffff60] flex-1.5 md:flex-1 xl:flex-1.5 rounded-3xl p-8 relative overflow-hidden">
                        <div className='min-h-[200px] md:h-auto '>
                            <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>Tic-Tac-Toe</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Compete with friends in Tic Tac Toe online! Enjoy a timeless game, challenge pals, and strategize for victory on our interactive platform.</p>
                            <Image src='/tictactoe2.png' width={200} height={250} alt='tictactoe' className='flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/Etch-a-sketch/" target='_blank' className="projectcard bg-[#ffffff60] flex-1 rounded-3xl p-8 relative overflow-hidden">
                        <div className='min-h-[200px] md:h-auto '>
                            <h4 className='font-bold text-[19px] md:text-xl text-primary-green mb-2'>Etch-a-sketch</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Pixel art unleashed!</p>
                            <Image src='/etchasketch.png' width={200} height={250} alt='tictactoe' className='flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                </div>
            </motion.section>
        </main>
    )
}
