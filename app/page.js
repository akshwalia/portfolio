
import Image from 'next/image'
import localFont from 'next/font/local'
import clsx from 'clsx';

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Home() {

  return (
    <main>

      <section className='flex flex-col items-center justify-center my-28' id='home'>
        <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
          <h1 className={`${acorn.className} text-primary-green text-9xl`}>Hi. I&apos;m Aksh Walia.</h1>
          <h2 className={`${acorn.className} text-primary-green text-9xl`} >A Web Developer.</h2>
          <Image src='/star.svg' alt='star' width={65} height={65} className='absolute left-0 bottom-0 star' />
          <Image src='/star.svg' alt='star' width={65} height={65} className='absolute right-0 top-0 star' />
        </div>
        <p className='text-xl text-primary-green'>I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
      </section>

      <section className='flex gap-10 mx-11 flex-wrap'>
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
      </section>
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
          <h2 className={`${acorn.className} text-primary-green text-9xl`} >Skills.</h2>
        </div>
        <p className='text-xl text-primary-green w-[670px] text-center'>Versatile expertise in web development, proficient in a spectrum of languages and frameworks, dedicated to delivering seamless, user-centric digital solutions.</p>
      </section>
      <section className='flex justify-center mb-20'>
        <div className='icons flex justify-center max-w-[950px] w-full flex-wrap gap-5'>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/nextjs.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/tailwind.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/mongodb.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/express.svg' width={70} height={70} alt='mongodb' className='invert' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/react.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/node.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/firebase.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/html.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/css.svg' width={70} height={70} alt='mongodb' className='relative top-1' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/jest.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/socketio.svg' width={70} height={70} alt='mongodb' />
          </div>
          <div className="bubble rounded-full bg-primary-green w-28 h-28 flex flex-col items-center justify-center">
            <Image src='/java.svg' width={70} height={70} alt='mongodb' />
          </div>
        </div>
      </section>

      
    </main>
  )
}
