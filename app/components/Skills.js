"use client"

import { MotionConfig } from 'framer-motion'
import { TechIcon } from './tech-icon'

export function SkillSection() {
    const technologies = [
        { src: '/nextjs.svg', alt: 'Next.js', delay: 0 },
        { src: '/tailwind.svg', alt: 'Tailwind CSS', delay: 0.05 },
        { src: '/mongodb.svg', alt: 'MongoDB', delay: 0.1, className: 'relative top-[2px] sm:top-1' },
        { src: '/express.svg', alt: 'Express.js', delay: 0.15, className: 'invert' },
        { src: '/react.svg', alt: 'React', delay: 0.2 },
        { src: '/node.svg', alt: 'Node.js', delay: 0.25 },
        { src: '/redux.svg', alt: 'Redux', delay: 0.3 },
        { src: '/typescript.svg', alt: 'TypeScript', delay: 0.35, className: 'scale-75 rounded-md sm:rounded-lg' },
        { src: '/aws.svg', alt: 'AWS', delay: 0.4, className: 'relative top-[2px]' },
        { src: '/html.svg', alt: 'HTML5', delay: 0.45, className: 'relative top-[2px] sm:top-1' },
        { src: '/css.svg', alt: 'CSS3', delay: 0.5, className: 'relative top-[2px] sm:top-1' },
        { src: '/socketio.svg', alt: 'Socket.IO', delay: 0.55 },
        { src: '/java.svg', alt: 'Java', delay: 0.6 },
    ]

    return (
        <section className='flex justify-center mb-20 mx-10 sm:mx-16 flex-col items-center gap-8'>
            <div className='icons flex justify-center max-w-[950px] w-full flex-wrap gap-2 sm:gap-5 '>
                <MotionConfig>
                    {technologies.map((tech, index) => (
                        <TechIcon key={index} {...tech} />
                    ))}
                </MotionConfig>
            </div>
        </section>
    )
}