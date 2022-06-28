import React from 'react'
import CommonButton from "../components/commonButton";

function ServicesIntro() {
    return (
        <div className="service-view" style={{ height: 'fit-content' }}>
            <div className="page-head">
                <h1>services</h1>
            </div>
            <div className="top-bins">
                <CommonButton variant='contained' color="primary">
                    View Pending Orders
                    <i class="fa-solid fa-bell px-4" ></i>
                </CommonButton>


            </div>
            <div className="search-bar">
                <button>
                    <p style={{ padding: "0" }}> All Categories</p>
                    <i class="fa-solid fa-chevron-down mx-2"></i>
                </button>
                <input type="text" className="search-field" placeholder='I am looking for...' />
                <button className="search-btn">
                    <i class="fa-solid fa-magnifying-glass px-2"></i>
                </button>
            </div>
        </div>
    )
}

export default ServicesIntro