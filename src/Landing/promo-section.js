import React from 'react'

function PromoSection() {
  return (
    <div className="promo-container">
      <div className="promo-header m-3 p-4">
        <h3>Popular Services</h3>
      </div>
      <div className="line mx-4"></div>
      <div className="promo-row">
        <div className="col col-promo">
          <div className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </div>
        </div>
        <div className="col col-promo">
          <div className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </div>
        </div>
        <div className="col col-promo">
          <div className="card">
            <div className="image-container">
              <img src="/cleaning.jpg" alt="" />
            </div>
            <div className="card-details">
              <h3>Cleaning</h3>
              <p>Get the best cleaning services</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PromoSection