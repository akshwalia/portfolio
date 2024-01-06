'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import clsx from 'clsx';
import { motion, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import getNowPlayingItem from './getCurrentlyPlaying';
import { useStore } from '@/store';

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Home() {
//   const loading = useStore(state => state.loading);

//   if(loading) return (
//     <div className='flex justify-center items-center h-screen w-screen'>
//         <Image src='/pokeball.png' width={200} height={200} alt='logo' />
//     </div>
// )

  return (
    <main>

      <section className='flex flex-col items-center justify-center my-28' id='home'>
        <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
          <motion.h1
            className={`${acorn.className} text-primary-green text-9xl`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}>
            Hi. I&apos;m Aksh Walia.
          </motion.h1>
          <motion.h2
            className={`${acorn.className} text-primary-green text-9xl`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}>
            A Web Developer.
          </motion.h2>
          <motion.div
            className='absolute left-0 bottom-0 star w-[60px] h-[60px]'
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 1, ease: 'backInOut', delay: 0.5 }}>
            <Image src='/star.svg' alt='star' width={65} height={65} />
          </motion.div>
          <motion.div
            className='absolute right-0 top-0 star w-[60px] h-[60px]'
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 1, ease: 'backInOut', delay: 0.5 }}>
            <Image src='/star.svg' alt='star' width={65} height={65} />
          </motion.div>
        </div>
        <motion.p
          className='text-xl text-primary-green text-center mt-5 '
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
          I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.
        </motion.p>
      </section>

      <motion.section
        className='flex gap-10 mx-11 flex-wrap'
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
        <a href="https://akshwalia.github.io/calculator/" rel='_blank' className='flex-1'>
          <div className="card  min-w-[400px] h-[450px] bg-[#df70eb94] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-lg'>Javascript</p>
            <h3 className={`${acorn.className} text-5xl`}>Calculator</h3>
            <Image src='/calculator.png' width={250} height={250} alt='Calculator' className='cardImage absolute -bottom-24 left-5 rounded-br-3xl' />
          </div>
        </a>
        <a href="https://chat-it-temp.vercel.app/" className='flex-1.75'>
          <div className="card flex-1.75 min-w-[600px] h-[450px] bg-[#67dcd2a7] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-lg'>ReactJs, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-5xl`}>Chat It</h3>
            <Image src='/chatit.png' width={800} height={446} alt='Chat It' className='cardImage absolute -bottom-44 -right-8 rounded-br-3xl' />
          </div>
        </a>
      </motion.section>
      <section className='flex gap-10 mx-11 my-28 flex-wrap'>
        <a href="https://akshwalia.github.io/weather/" className='flex-2'>
          <div className="card flex-1.5 min-w-[600px] h-[450px] bg-[#a5764f91] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-lg'>Javascript</p>
            <h3 className={`${acorn.className} text-5xl`}>Weather App</h3>
            <Image src='/weather.png' width={800} height={800} alt='weather' className='cardImage absolute -bottom-44  rounded-br-3xl' />
          </div>
        </a>
        <a href="http://where-pikachu.vercel.app/" className='flex-1'>
          <div className="card flex-1 min-w-[400px] h-[450px] bg-[#70beeb7e] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-lg'>ReactJS, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-5xl`}>Where&apos;s <br /> Pikachu</h3>
            <Image src='/pikachu.png' width={350} height={350} alt='chatit' className='cardImage absolute -bottom-44 left-0 rounded-br-3xl' />
          </div>
        </a>
      </section>
      <section className='flex flex-col items-center justify-center mt-28 mb-20' id='skills'>
        <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
          <motion.h2 className={`${acorn.className} text-primary-green text-9xl`}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeIn', delay: 0.1 }}>Skills.</motion.h2>
        </div>
        <motion.p className='text-xl text-primary-green w-[670px] text-center'
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}>Versatile expertise in web development, proficient in a spectrum of languages and frameworks, dedicated to delivering seamless, user-centric digital solutions.</motion.p>
      </section>
      <section className='flex justify-center mb-20'>
        <div className='icons flex justify-center max-w-[950px] w-full flex-wrap gap-5'>
          <MotionConfig

          >
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0 }}>
              <Image src='/nextjs.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.05 }}>
              <Image src='/tailwind.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}>
              <Image src='/mongodb.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.15 }}>
              <Image src='/express.svg' width={70} height={70} alt='mongodb' className='invert' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}>
              <Image src='/react.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.25 }}>
              <Image src='/node.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}>
              <Image src='/firebase.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.35 }}>
              <Image src='/html.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}>
              <Image src='/css.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.45 }}>
              <Image src='/jest.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}>
              <Image src='/socketio.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.55 }}>
              <Image src='/java.svg' width={70} height={70} alt='mongodb' />
            </motion.div>
          </MotionConfig>
        </div>
      </section>


    </main>
  )
}
