import React from 'react'
import { motion} from "motion/react"

const Title = ({title, desc}) => {
  return (
    <>
     <motion.h2 className='text-3xl sm:text-5xl font-medium'>{title}</motion.h2>
     <motion.p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</motion.p>
    </>
  )
}

export default Title
