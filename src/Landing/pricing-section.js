import React, { Component } from 'react';
import bgImage from "../assets/images/green.jpg"

function PricingSection() {
    const pricingBackground = {
        backgroundImage: `url(${bgImage})`
    }

    return (
        <div className='mid-section' style={pricingBackground} >
            <div className="promo-header p-4">
                <h3>Pricing</h3>
            </div>
            <div className="line-2 mx-4"></div>
            <div className="pricing-details p-4">
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores fuga architecto aliquid eum recusandae incidunt cum ut aliquam blanditiis quis. A illum natus deserunt minima iste nisi in, recusandae doloremque.</h4>
            </div>
            <div className="button p-4">
                <button className="btn btn-outline-light w-50">
                    View Prices
                </button>
            </div>
        </div>
    )
}

export default PricingSection