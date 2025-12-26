'use client'
import React from 'react'
import { motion } from 'framer-motion'
function Wellcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration:2
      }}

      >Hell Here</motion.div>
    </div>
  )
}

export default Wellcome
