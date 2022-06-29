import React from 'react'
import { motion } from 'framer-motion'

function PromoSection() {
  return (
    <div className="promo-container p-2">
      <div className="promo-header p-4">
        <h3>Popular Services</h3>
      </div>
      <div className="line mx-4"></div>
      <div className="promo-row">
        <div className="col-promo">
          <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </motion.div>
        </ div>


        <div className="col-promo">
          <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </motion.div>
        </div>
        <div className="col-promo">
          <motion.div whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px black' }} className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default PromoSection