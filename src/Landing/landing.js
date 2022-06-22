import React, { Component } from 'react';
import FirstSection from './first-section';
import PromoSection from './promo-section';
import PricingSection from './pricing-section';
import Footer from '../components/footer';

function Landing() {

    return (
        <>
            <FirstSection />
            <PromoSection />
            <PricingSection />
            <Footer />
        </>

    );
}


export default Landing;