import localFont from 'next/font/local'
import Image from 'next/image'
import clsx from 'clsx';

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

export default function Projects() {
    return (
        <main>
            <section className='flex flex-col items-center justify-center my-28' id='home'>
                <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
                    <h1 className={`${acorn.className} text-primary-green text-9xl`}>Play.</h1>
                    <Image src='/star.svg' alt='star' width={65} height={65} className='absolute right-0 top-0 star' />
                </div>
                <p className='text-xl text-primary-green max-w-[700px] text-center mt-8'>A collection of tools and sites I&apos;ve created, designed to be helpful, fun, & sometimes just a little bit weird.</p>
            </section>

            <section className='grid grid-cols-3 h-[500px] mx-11 gap-7'>
                <div className="left border-solid flex flex-col gap-7">
                    <a href="https://chat-it-temp.vercel.app/" target='_blank'className="projectcard bg-[#ffffff60] flex-1 rounded-3xl py-2 px-8 flex items-center justify-center">
                        <div className='flex justify-between items-center'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-xl text-primary-green mb-2'>ChatIt</h4>
                                <p className='text-primary-green opacity-90'> Join live chats instantly! Connect, converse, and engage in real-time discussions on our dynamic platform.</p>
                            </div>
                            <Image src='/chatIcon.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px] rounded-full' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/calculator/" target='_blank'className="projectcard bg-[#ffffff60] flex-2 rounded-3xl p-8 relative overflow-hidden">
                        <div className=''>
                            <h4 className='font-bold text-xl text-primary-green mb-2'>Calculator</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Effortless calculations await! Crunch numbers swiftly on our user-friendly online calculator.</p>
                            <Image src='/calculator.png' width={200} height={250} alt='calculator' className='flex-grow-0 flex-shrink-0 absolute left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                </div>
                <div className="centre border-solid flex flex-col gap-7">
                    <a href="https://pokemon-memory-card.vercel.app/" target='_blank'className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-xl text-primary-green mb-3'>Pokémemo</h4>
                                <p className='text-primary-green opacity-90'> Gotta Remember &apos;Em All! Can You Uncover &apos;Em Without A Second Poke?</p>
                            </div>
                            <Image src='/pokeball.png' width={110} height={0} alt='pokeball' className='flex-grow-0 flex-shrink-0 h-[110px]' />
                        </div>
                    </a>
                    <a href="http://where-pikachu.vercel.app/" target='_blank'className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-xl text-primary-green mb-2'>Where&apos;s Pikachu</h4>
                                <p className='text-primary-green opacity-90'> Scan the crowded image, spot the requested Pokemon, and test your eye for detail!</p>
                            </div>
                            <Image src='/greatball.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px]' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/JS-Drum-Kit/" target='_blank'className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center">
                        <div className='flex justify-between items-center'>
                            <div className='h-full flex flex-col flex-1 justify-center'>
                                <h4 className='font-bold text-xl text-primary-green mb-2'>Drum Kit</h4>
                                <p className='text-primary-green opacity-90'> Experience drums at your fingertips! Tap keys for instant drum sounds on our interactive website.</p>
                            </div>
                            <Image src='/drumkit.png' width={100} height={0} alt='greatball' className='flex-grow-0 flex-shrink-0 h-[100px]' />
                        </div>
                    </a>
                </div>
                <div className="right border-solid flex flex-col gap-7">
                    <a href="https://akshwalia.github.io/tic-tac-toe/" target='_blank'className="projectcard bg-[#ffffff60] flex-1.5 rounded-3xl p-8 relative overflow-hidden">
                        <div >
                            <h4 className='font-bold text-xl text-primary-green mb-2'>Tic-Tac-Toe</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Compete with friends in Tic Tac Toe online! Enjoy a timeless game, challenge pals, and strategize for victory on our interactive platform.</p>
                            <Image src='/tictactoe2.png' width={200} height={250} alt='tictactoe' className='flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                    <a href="https://akshwalia.github.io/Etch-a-sketch/" target='_blank'className="projectcard bg-[#ffffff60] flex-1 rounded-3xl p-8 relative overflow-hidden">
                        <div >
                            <h4 className='font-bold text-xl text-primary-green mb-2'>To-Do List</h4>
                            <p className='text-primary-green opacity-90 mb-3'> Pixel art unleashed!</p>
                            <Image src='/etchasketch.png' width={200} height={250} alt='tictactoe' className='flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto' />
                        </div>
                    </a>
                </div>
            </section>
        </main>
    )
}