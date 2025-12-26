'use client'
import React from 'react'
import { motion } from 'framer-motion'
function Wellcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
      initial={{
        opacity:0, 
        y:-20
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:2
      }}

      ><h1>Anamika</h1></motion.div>
    </div>
  )
}

export default Wellcome
