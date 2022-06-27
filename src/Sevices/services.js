import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}


        >
            <div className="service-view" style={{ height: '100vh', backgroundColor: 'aqua' }}>
                <h1>
                    Services
                </h1>
            </div>

            <Footer />
        </motion.div>
    )
}

export default Services