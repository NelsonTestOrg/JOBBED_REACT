import React from 'react'
import CommonButton from "../components/commonButton";
import { motion } from 'framer-motion'


function ServicesIntro() {
    return (
        <div className="service-view" style={{ height: 'fit-content' }}>
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                className="page-head">
                <h1>services</h1>
            </motion.div>
            <div className="top-bins">
                <CommonButton variant='contained' color="primary">
                    View Pending Orders
                    <i class="fa-solid fa-bell px-4" ></i>
                </CommonButton>


            </div>
            <div className="search-bar">
                <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px black' }}>
                    <p style={{ padding: "0" }}> All Categories</p>
                    <i class="fa-solid fa-chevron-down mx-2"></i>
                </motion.button>
                <motion.input whileHover={{ scale: 1.01 }} type="text" className="search-field" placeholder='I am looking for...' />
                <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px black' }} className="search-btn">
                    <i class="fa-solid fa-magnifying-glass px-2"></i>
                </motion.button>
            </div>
        </div>
    )
}

export default ServicesIntro