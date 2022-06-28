import React, { Component } from 'react';
import FirstSection from './first-section';
import PromoSection from './promo-section';
import PricingSection from './pricing-section';
import { motion } from "framer-motion"

function Landing() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}

        >
            <FirstSection />
            <PromoSection />
            <PricingSection />
        </motion.div >

    );
}


export default Landing;