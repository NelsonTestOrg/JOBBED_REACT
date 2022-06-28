import React from 'react'
import './services.css'
import { motion } from 'framer-motion'
import ServicesIntro from './services-intro'
import ServicesDisplay from './services-display'


function Services() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className ="services"
        >
            <ServicesIntro />
            <ServicesDisplay />
        </motion.div >
    )
}

export default Services