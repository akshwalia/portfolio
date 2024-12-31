'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import clsx from 'clsx';
import { motion, MotionConfig } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { useEffect } from 'react';
import { useStore } from '@/store';
import { SkillSection } from './components/Skills';

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Home() {
  const setSelected = useStore(state => state.setSelected);
  useEffect(() => {
    setSelected(0);
  }, []);

  return (
    <main>

      <section className='flex flex-col items-center justify-center my-10 sm:my-28' id='home'>
        <div className='flex flex-col items-center justify-center sm:px-[10vh] sm:py-[2vh] relative w-fit'>
          <motion.h1
            className={`${acorn.className} text-primary-green text-[2.3rem] sm:text-[8vw] lg:text-[8.7vw] leading-[1] h-full`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}>
            Hi. I&apos;m Aksh Walia.
          </motion.h1>
          <motion.h2
            className={`${acorn.className} text-primary-green text-[2.3rem] sm:text-[8vw] lg:text-[8.7vw] leading-[1] h-full`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}>
            A Web Developer.
          </motion.h2>
          <motion.div
            className='absolute left-0 bottom-0 star w-[60px] h-[60px] hidden sm:block'
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 1, ease: 'backInOut', delay: 0.5 }}>
            <Image src='/star.svg' alt='star' width={65} height={65} className='scale-50 sm:scale-100' />
          </motion.div>
          <motion.div
            className='absolute right-0 top-0 star w-[60px] h-[60px] hidden sm:block'
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 1, ease: 'backInOut', delay: 0.5 }}>
            <Image src='/star.svg' alt='star' width={65} height={65} className='scale-50 sm:scale-100' />
          </motion.div>
        </div>
        <motion.p
          className='text-xs text-primary-green text-center mt-2 sm:mt-5 sm:text-xl px-10'
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
          I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.
        </motion.p>
      </section>

      <motion.section
        className='flex gap-5 sm:gap-10 mx-5 sm:mx-11 flex-wrap flex-col lg:flex-row'
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }}>
        <a href="https://metaversus-akshwalia.vercel.app" rel='_blank' className='flex-1' target='_blank'>
          <div className="card h-[230px] sm:h-[420px] md:h-[450px] bg-[#df70eb94] rounded-[60px] text-right p-8 sm:p-10 text-slate-800 relative overflow-hidden">
            <p className='text-[11px] sm:text-lg'>Next.js, Tailwind, Framer Motion</p>
            <h3 className={`${acorn.className} text-xl sm:text-4xl lg:text-5xl`}>Metaversus</h3>
            <Image src='/metaversus.png' width={260} height={250} alt='Metvversus' className='cardImage w-[200px] sm:w-[260px] absolute -bottom-48 sm:-bottom-24 left-5 rounded-br-3xl' />
          </div>
        </a>
        <a href="https://chat-it-temp.vercel.app/" className='flex-1.75' target='_blank'>
          <div className="card flex-1.75 h-[230px] sm:h-[420px] md:h-[450px] bg-[#67dcd2a7] rounded-[60px] text-right p-8 sm:p-10 text-slate-800 relative overflow-hidden">
            <p className='text-[11px] sm:text-lg'>ReactJs, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-xl sm:text-4xl lg:text-5xl`}>Chat It</h3>
            <Image src='/chatit.png' width={1500} height={800} alt='Chat It' className='cardImage absolute -bottom-16 w-[400px] sm:-bottom-32 md:-bottom-44 sm:w-[800px] -right-8 rounded-br-3xl' />
          </div>
        </a>
      </motion.section>
      <section className='flex gap-5 sm:gap-10 mx-5 sm:mx-11 mt-5 sm:mt-10 mb-10 lg:my-28 flex-wrap flex-col lg:flex-row'>
        <a href="https://quizzo-aksh.vercel.app/" className='flex-2' target='_blank'>
          <div className="card flex-1.5 h-[230px] sm:h-[420px] md:h-[450px] bg-[#a5764f91] rounded-[60px] text-right p-8 sm:p-10 text-slate-800 relative overflow-hidden">
            <p className='text-[11px] sm:text-lg'>NextJS, Express, SocketIO</p>
            <h3 className={`${acorn.className} text-xl sm:text-4xl lg:text-5xl`}>Quizzo</h3>
            <Image src='/quizzoSafari.png' width={1500} height={800} alt='weather' className='cardImage absolute  -bottom-8 w-[400px] sm:-bottom-14 md:-bottom-24 sm:w-[800px]  rounded-br-3xl' />
          </div>
        </a>
        <a href="http://where-pikachu.vercel.app/" className='flex-1' target='_blank'>
          <div className="card flex-1 h-[230px] sm:h-[420px] md:h-[450px] bg-[#70beeb7e] rounded-[60px] text-right p-8 sm:p-10 text-slate-800 relative overflow-hidden">
            <p className='text-[11px] sm:text-lg'>ReactJS, MongoDB, Express</p>
            <h3 className={`${acorn.className} text-xl sm:text-4xl lg:text-5xl`}>Where&apos;s <br className='hidden sm:block' /> Pikachu</h3>
            <Image src='/pikachu.png' width={550} height={450} alt='chatit' className='cardImage absolute left-2 -bottom-48 2xl:w-[300px] w-[180px] sm:w-[300px] lg:w-[280px] sm:left-5 md:-bottom-56 rounded-br-3xl' />
          </div>
        </a>
      </section>
      <section className='flex flex-col items-center justify-center mt-10 sm:mt-28 mb-10 sm:mb-20 sm:gap-10' id='skills'>
        <div className='flex flex-col items-center justify-center sm:px-[15vh] sm:py-[2vh] relative w-fit text-6xl sm:text-[8.7vw] '>
          <motion.h2 className={`${acorn.className} text-primary-green`}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeIn', delay: 0.1 }}>Skills.</motion.h2>
        </div>
        <motion.p className='text-xs sm:text-xl text-primary-green w-[80vw] sm:w-[60vw] text-center'
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}>Versatile expertise in web development, proficient in a spectrum of languages and frameworks, dedicated to delivering seamless, user-centric digital solutions.</motion.p>
      </section>

      <SkillSection />




    </main>
  )
}
