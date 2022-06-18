import React, { Component } from 'react';
import "./landing.css";
import backgrImage from "../assets/images/bg3.jpg";
import CommonButton from "../components/commonButton";

function FirstSection() {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${backgrImage})`,
        marginTop: "6rem",
        height: "80vh",
        WebkitBackgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexWrap: "wrap",
        backgroundAttachment: "fixed"
    }
    const specialBtns = {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        marginLeft: ".5rem",
        height: "3rem"
    }
    const headers = {
        fontSize: "5vw"
    }
    return (
        <div className="first-section" style={divStyle} >
            <div className="descriptionText w-100">
                <h1 style={headers}>
                    Taking care of your home needs
                </h1>
                <h4>
                    Finding someone to run your errands, get your engine fixed? We have someone for everyone.
                </h4>
            </div>
            <div className="searchBar p-3 " style={{ width: "100vw", justifyContent: "center", textAlign: "center", margin: "4rem", display: "flex", flexWrap: "nowrap" }}>
                <select name="search" id="" className='form-select form-select-lg mb-3' style={{ height: "fit-content", width: "50%" }}>
                    <option selected >What services are you looking for?</option>
                    <option value="1" >One</option>
                    <option value="2" >Two</option>
                    <option value="3" >Three</option>
                </select>
                <CommonButton variant="contained" color="primary" sx={specialBtns}>
                    Let's get connected
                </CommonButton>
            </div>

        </div>

    )
}

export default FirstSection;