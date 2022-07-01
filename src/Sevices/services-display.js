import React from 'react'
import img1 from '../assets/images/electrical.png'
import img2 from '../assets/images/cleaning-staff.png'
import img3 from '../assets/images/gardening.png'
import img4 from '../assets/images/moving-home.png'
import img5 from '../assets/images/plumbing.png'
import { ChevronRightRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'

function ServicesDisplay() {
    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}

            className="main_container">
            <div className="items-page-link">
                <h3 className='px-4' >Browse By Category </h3>
                <motion.button
                    whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                    className="btn btn-outline-dark"
                    style={{ border: 'none' }}
                >
                    View All
                    <ChevronRightRounded />

                </motion.button>
            </div>
            <div className="list-view" >
                <motion.div
                    whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }}

                    className="category-item">
                    <img src={img1} alt="category" />
                    <h2>Electrical</h2>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="category-item">
                    <img src={img2} alt="category" />
                    <h2>Cleaning</h2>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="category-item">
                    <img src={img3} alt="category" />
                    <h2>Gardening</h2>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="category-item">
                    <img src={img4} alt="category" />
                    <h2>Movers</h2>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="category-item">
                    <img src={img5} alt="category" />
                    <h2>Plumbing</h2>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServicesDisplay