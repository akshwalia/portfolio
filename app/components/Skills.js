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
        { src: '/docker.svg', alt: 'Docker', delay: 0.3, className: '' },
        { src: '/redis.svg', alt: 'Redis', delay: 0.35, className: 'relative top-[2px]' },
        { src: '/redux.svg', alt: 'Redux', delay: 0.4 },
        { src: '/typescript.svg', alt: 'TypeScript', delay: 0.45, className: 'scale-75 rounded-md sm:rounded-lg' },
        { src: '/aws.svg', alt: 'AWS', delay: 0.5, className: 'relative top-[2px]' },
        { src: '/html.svg', alt: 'HTML5', delay: 0.55, className: 'relative top-[2px] sm:top-1' },
        { src: '/css.svg', alt: 'CSS3', delay: 0.6, className: 'relative top-[2px] sm:top-1' },
        { src: '/socketio.svg', alt: 'Socket.IO', delay: 0.65 },
        { src: '/java.svg', alt: 'Java', delay: 0.7 },
        { src: '/git.svg', alt: 'Git', delay: 0.75 },
    ]

    return (
        <section className='flex justify-center mb-5 sm:mb-20 mx-5 sm:mx-16 flex-col items-center gap-8'>
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