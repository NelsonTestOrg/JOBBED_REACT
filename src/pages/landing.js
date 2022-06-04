import React from 'react';
import "./landing.css";
import { TextField } from '@mui/material';
import backgrImage from "../assets/images/bg1.jpg";
import CommonButton from "../components/commonButton";

function Landing() {


    const divStyle = {
        backgroundImage: `url(${backgrImage})`,
        marginTop: "6rem",
        height: "75vh",
        WebkitBackgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexWrap: "wrap"
    }
    const specialBtns = {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        marginLeft: ".5rem",
        background: "#33FF00",
        height: "3.5rem"
    }

    return (
        <div className="firstView" style={divStyle}>
            <div className="displayText m-3 w-100" style={{ textAlign: "center" }}>
                <h1>
                    Taking care of your home needs
                </h1>
            </div>
            <div className="descriptionText w-100">
                <h4>
                    Finding someone to run your errands, get your engine fixed? We have someone for everyone.
                </h4>
            </div>
            <div className="searchBar p-3 " style={{ width: "100vw", justifyContent: "center", textAlign: "center", margin: "4rem", display: "flex", flexWrap: "nowrap" }}>

                <TextField
                    id="filled-required"
                    label="Which services are you looking for?"
                    variant="filled"
                    color="primary"
                    sx={{ width: '50%', borderRadius: "3px", background: "rgba(255, 255, 255, 0.59)", height: "fit-content" }}
                />
                <CommonButton variant="contained" color="primary" sx={specialBtns}>
                    Let's get connected
                </CommonButton>
            </div>
        </div>

    );
}


export default Landing;