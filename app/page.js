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

  return (
    <main>

      <section className='flex flex-col items-center justify-center my-10 sm:my-28' id='home'>
        <div className='flex flex-col items-center justify-center px-[10vh] py-[2vh] relative w-fit'>
          <motion.h1
            className={`${acorn.className} text-primary-green text-[7vw] sm:text-[8vw] lg:text-[8.7vw]`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}>
            Hi. I&apos;m Aksh Walia.
          </motion.h1>
          <motion.h2
            className={`${acorn.className} text-primary-green text-[7vw] sm:text-[8vw] lg:text-[8.7vw]`}
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
            <Image src='/star.svg' alt='star' width={65} height={65} className='scale-50 sm:scale-100' />
          </motion.div>
          <motion.div
            className='absolute right-0 top-0 star w-[60px] h-[60px]'
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 1, ease: 'backInOut', delay: 0.5 }}>
            <Image src='/star.svg' alt='star' width={65} height={65} className='scale-50 sm:scale-100' />
          </motion.div>
        </div>
        <motion.p
          className='text-xs text-primary-green text-center mt-5 sm:text-xl px-10'
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
          I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.
        </motion.p>
      </section>

      <motion.section
        className='flex gap-10 mx-11 flex-wrap flex-col lg:flex-row'
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
        <a href="https://metaversus-akshwalia.vercel.app" rel='_blank' className='flex-1' target='_blank'>
          <div className="card h-[300px] sm:h-[420px] md:h-[450px] bg-[#df70eb94] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-base sm:text-lg'>Next.js, Tailwind, Framer Motion</p>
            <h3 className={`${acorn.className} text-2xl sm:text-4xl lg:text-5xl`}>Metaversus</h3>
            <Image src='/metaversus.png' width={260} height={250} alt='Metvversus' className='cardImage w-[240px] sm:w-[260px] absolute -bottom-52 sm:-bottom-24 left-5 rounded-br-3xl' />
          </div>
        </a>
        <a href="https://chat-it-temp.vercel.app/" className='flex-1.75' target='_blank'>
          <div className="card flex-1.75 h-[300px] sm:h-[420px] md:h-[450px] bg-[#67dcd2a7] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-base sm:text-lg'>ReactJs, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-2xl sm:text-4xl lg:text-5xl`}>Chat It</h3>
            <Image src='/chatit.png' width={1500} height={800} alt='Chat It' className='cardImage absolute -bottom-12 w-[400px] sm:-bottom-32 md:-bottom-44 sm:w-[800px] -right-8 rounded-br-3xl' />
          </div>
        </a>
      </motion.section>
      <section className='flex gap-10 mx-11 mt-10 mb-20 lg:my-28 flex-wrap flex-col lg:flex-row'>
        <a href="https://akshwalia.github.io/weather/" className='flex-2' target='_blank'>
          <div className="card flex-1.5 h-[300px] sm:h-[420px] md:h-[450px] bg-[#a5764f91] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-base sm:text-lg'>Javascript</p>
            <h3 className={`${acorn.className} text-2xl sm:text-4xl lg:text-5xl`}>Weather App</h3>
            <Image src='/weather.png' width={1500} height={800} alt='weather' className='cardImage absolute -bottom-12 w-[400px] sm:-bottom-32 md:-bottom-44 sm:w-[800px]  rounded-br-3xl' />
          </div>
        </a>
        <a href="http://where-pikachu.vercel.app/" className='flex-1' target='_blank'>
          <div className="card flex-1 h-[300px] sm:h-[420px] md:h-[450px] bg-[#70beeb7e] rounded-[60px] text-right p-10 text-slate-800 relative overflow-hidden">
            <p className='text-base sm:text-lg'>ReactJS, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-2xl sm:text-4xl lg:text-5xl`}>Where&apos;s <br /> Pikachu</h3>
            <Image src='/pikachu.png' width={550} height={450} alt='chatit' className='cardImage absolute left-2 -bottom-48 2xl:w-[300px] w-[200px] sm:w-[300px] lg:w-[280px] sm:left-5 md:-bottom-56 rounded-br-3xl' />
          </div>
        </a>
      </section>
      <section className='flex flex-col items-center justify-center mw-20 sm:t-28 mb-10 sm:mb-20' id='skills'>
        <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
          <motion.h2 className={`${acorn.className} text-primary-green text-[8.7vw]`}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeIn', delay: 0.1 }}>Skills.</motion.h2>
        </div>
        <motion.p className='text-xs sm:text-xl text-primary-green w-[60vw] text-center'
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}>Versatile expertise in web development, proficient in a spectrum of languages and frameworks, dedicated to delivering seamless, user-centric digital solutions.</motion.p>
      </section>
      <section className='flex justify-center mb-20 mx-10 sm:mx-16'>
        <div className='icons flex justify-center max-w-[950px] w-full flex-wrap gap-5'>
          <MotionConfig

          >
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0 }}>
              <Image src='/nextjs.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.05 }}>
              <Image src='/tailwind.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}>
              <Image src='/mongodb.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.15 }}>
              <Image src='/express.svg' width={70} height={70} alt='mongodb' className='invert w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}>
              <Image src='/react.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.25 }}>
              <Image src='/node.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.55 }}>
              <Image src='/redux.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}>
              <Image src='/firebase.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.35 }}>
              <Image src='/html.svg' width={70} height={70} alt='mongodb' className='relative top-1 w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}>
              <Image src='/css.svg' width={70} height={70} alt='mongodb' className='relative top-1 w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.45 }}>
              <Image src='/jest.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}>
              <Image src='/socketio.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>
            <motion.div className="bubble rounded-full bg-primary-green w-20 sm:w-28 h-20 sm:h-28 flex flex-col items-center justify-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.55 }}>
              <Image src='/java.svg' width={70} height={70} alt='mongodb' className='w-[45px] sm:w-[70px]' />
            </motion.div>

          </MotionConfig>
        </div>
      </section>


    </main>
  )
}
