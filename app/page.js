
import Image from 'next/image'
import localFont from 'next/font/local'
import clsx from 'clsx';

const acorn = localFont({ src: './fonts/Acorn-Bold.woff2' });

export default function Home() {

  return (
    <main>

      <section className='flex flex-col items-center justify-center my-28' id='home'>
        <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
          <h1 className={`${acorn.className} text-primary-green text-9xl`}>Hi. I am Aksh Walia.</h1>
          <h2 className={`${acorn.className} text-primary-green text-9xl`} >A Web Developer.</h2>
          <Image src='/star.svg' alt='star' width={65} height={65} className='absolute left-0 bottom-0 star' />
          <Image src='/star.svg' alt='star' width={65} height={65} className='absolute right-0 top-0 star' />
        </div>
        <p className='text-xl text-primary-green'>I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
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
            <h3 className={`${acorn.className} text-5xl`}>Where's <br /> Pikachu</h3>
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
        </div>
      </section>

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
              <h3 className={`${acorn.className} text-3xl text-primary-green`}>Let's talk.</h3>
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
    </main>
  )
}
