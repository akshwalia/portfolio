'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[90vh] bg-transparent"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-primary-green mb-4" lang="hi">
        नमस्ते
      </h1>
      <LoadingDots />
    </motion.div>
  )
}

function LoadingDots() {
  return (
    <div className="flex space-x-2" aria-label="Loading">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 rounded-full bg-primary-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}