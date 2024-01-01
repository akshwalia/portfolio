import Image from 'next/image'
import localFont from 'next/font/local'
import clsx from 'clsx';

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

export default function About() {
    return (
        <main>
            <section className='flex flex-col items-center justify-center my-20' id='home'>
                <div className='flex flex-col items-center justify-center px-[15vh] py-[2vh] relative w-fit'>
                    <h1 className={`${acorn.className} text-primary-green text-9xl`}>I&apos;m Aksh.</h1>

                </div>
            </section>

            <section className='flex justify-center mb-11 mx-5'>
                <div className='flex justify-between gap-16 max-w-[1250px] w-full'>
                    <div className="left relative">
                        <div className='relative'>
                            <Image src='/aksh3.jpg' width={370} height={800} alt='Aksh' className='rounded-tr-full rounded-tl-full' />
                            <div className='bg-primary-green h-20 w-full absolute bottom-0 flex justify-start items-center gap-5 px-6'>
                                <Image src='/spotify-white.svg' width={50} height={50} alt='spotify' className='rounded-full opacity-40' />
                                <div className='flex flex-col justify-center h-full text-white opacity-75'>
                                    <p className='text-sm text-white'>Currently listening to</p>
                                    <p className={`${acorn.className} text-lg`}>The Beatles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right flex-2.5 pt-7">
                        <h2 className={`${acorn.className} text-primary-green text-6xl`}>I&apos;m a second-year Computer Science Engineering student at Delhi Technological University, India.</h2>
                        <p className='text-primary-green text-xl my-5'>Self-taught Full Stack Developer continuously embracing new technologies to expand my skill set. Passionate about crafting seamless digital experiences, I thrive on the dynamic nature of web development.</p>
                        <p className='text-primary-green text-xl'>Open to freelance opportunities, I bring a dedication to learning and a knack for leveraging diverse technologies to create impactful solutions.</p>
                    </div>
                </div>
            </section >

            <section className='mx-10 flex flex-col gap-5 mb-28'>
                <div className="workbubble bg-primary-green rounded-full text-white flex justify-between items-center w-[30vw] px-7 py-4 self-end">
                    <div>
                        <p className='font-bold text-xl'>Fresources</p>
                        <p className='text-xl'>Academic Team Member</p>
                    </div>
                    <div className={`${acorn.className} text-2xl`}>23~</div>
                </div>
                <div className="workbubble bg-primary-green rounded-full text-white justify-between flex items-center w-[60vw] px-7 py-4">
                    <div>
                        <p className='font-bold text-xl'>Desh Ke Mentor</p>
                        <p className='text-xl'>Mentor</p>
                    </div>
                    <div className={`${acorn.className} text-2xl`}>22~23</div>
                </div>
            </section>

            <section className='flex flex-col pr-64 mb-11'>
                <div className='self-end max-w-[800px]'>
                    <h3 className={`${acorn.className} text-primary-green text-5xl mb-5`}>Open to collaboration with a focus on sustainability, education, equality, or carbon neutrality.</h3>
                    <div className='max-w-[600px] text-primary-green opacity-95 text-xl'>
                        I&apos;m driven by the belief that we should leave our Earth in a better state for future generations. My aim is to contribute to these ideals in any way possible. If you share this vision, I&apos;d love to connect and discuss further.
                    </div>
                </div>
            </section>

            <section className='bg-[#ffffff3e] rounded-[60px] m-11 mb-20 grid grid-cols-2 py-28 px-36 gap-10'>
                <div>
                    <p className={`${acorn.className} text-5xl text-primary-green opacity-60 mb-5`}>01</p>
                    <h4 className={`${acorn.className} text-3xl text-primary-green mb-5`}>Clear Communication and Understanding</h4>
                    <p className='text-primary-green opacity-95 text-xl'> I begin by thoroughly understanding my client&apos;s needs. I engage in detailed discussions, ask pertinent questions, and ensure we&apos;re aligned on the project&apos;s scope, goals, and timelines. Documenting these discussions helps avoid any future misunderstandings.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-5xl text-primary-green opacity-60 mb-5`}>02</p>
                    <h4 className={`${acorn.className} text-3xl text-primary-green mb-5`}>Regular Updates and Progress Reports</h4>
                    <p className='text-primary-green opacity-95 text-xl'> Throughout the project, I keep my client updated on the progress. Sharing achieved milestones and seeking feedback at crucial junctures fosters transparency in my workflow and builds trust with the client.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-5xl text-primary-green opacity-60 mb-5`}>03</p>
                    <h4 className={`${acorn.className} text-3xl text-primary-green mb-5`}>Quality Assurance and Testing</h4>
                    <p className='text-primary-green opacity-95 text-xl'>  I prioritize delivering high-quality work. Rigorous testing across browsers, devices, and screen sizes ensures a flawless website. By fixing bugs and optimizing performance, I showcase my commitment to excellence.</p>
                </div>
                <div>
                    <p className={`${acorn.className} text-5xl text-primary-green opacity-60 mb-5`}>04</p>
                    <h4 className={`${acorn.className} text-3xl text-primary-green mb-5`}>Punctual Delivery and Comprehensive Post-Project Support</h4>
                    <p className='text-primary-green opacity-95 text-xl'> I make it a priority to meet deadlines or even surpass them. Moreover, I offer post-launch support and training sessions to ensure the client feels confident managing their website. Providing ongoing assistance demonstrates my dedication to their satisfaction beyond project completion.</p>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center mb-20'>
                <div className='max-w-[700px] flex flex-col gap-7'>
                    <div className='text-primary-green text-xl'>
                        Back when I began coding, Java was like my first language in the tech world. It got me curious about how stuff worked behind the scenes on computers. But then, I stumbled onto web development—a whole new world that caught my attention.
                    </div>
                    <div className='text-primary-green text-xl'>
                        Building websites became my thing. It wasn&apos;t just about making things work; it was about making them look cool and easy to use. It was like painting with pixels and code.
                    </div>
                    <div className='text-primary-green text-xl'>
                        Besides tech, I found joy in other things like drawing, singing, and taking pictures. They&apos;re my ways of expressing feelings and freezing moments in time. These hobbies blend with my love for web design, making my journey both colorful and creative. Now, I&apos;m all about crafting online experiences that people enjoy and remember.
                    </div>
                </div>
            </section>

            <section>

            </section>
        </main>
    )
}