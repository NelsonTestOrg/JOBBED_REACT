import React, { useState } from "react";
import CommonButton from "./commonButton";
import { AiOutlineUserAdd } from "react-icons/ai"
import { TiHomeOutline } from "react-icons/ti"

import {
    HomeRounded,
    AccountCircleRounded,
    MenuSharp,
    AssignmentIndOutlined,
    CloseRounded
} from "@mui/icons-material";

function NavBar() {
    const myStyle = {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        textTransform: "none"

    };

    const specialBtns = {
        fontFamily: ["Nunito", "sans-serif"].join(","),
    }

    const navPosition = {
        top: '0',
        background: "#E2E2E2",
        position: 'fixed',
        display: "flex",
        flexWrap: "nowrap",
        zIndex: "99"
    }
    const mobileView = {
        fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
        width: '100%',
        padding: '10px',
        letterSpacing: '.5rem',
        fontWeight: 'bold'
    }

    const state = {
        clicked: false,
    };
    const list = {
        listStyleType: 'none'
    }

    const [show, setShow] = useState(false)

    const [showLogin, setShowLogin] = useState(false)

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    }

    const toggleOptions = () => {
        setShow(!show)
        setShowLogin(!showLogin)
    }


    return (
        <nav
            className="home-nav p-0 w-100"
            style={navPosition}
        >
            <div className="row nav p-0 body-head" style={{ justifyContent: "space-between", width: "100%", display: "flex", flexWrap: "nowrap" }}>
                <div className=" p-0 logo-box" style={{ marginLeft: "5px", justifyContent: "space-between", width: "fit-content" }}>
                    <img
                        style={{ width: "15rem", height: "6rem", objectFit: "cover" }}
                        src="/GigRfilled.png"
                        alt="GIGR Logo"
                    />
                </div>
                <div className="col-4 justify-content-center" style={{ width: "fit-content" }}>
                    <div className="navbar navbar-expand-md w-100 ml-0 h-100 justify-content-end nav-options">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav w-100 justify-content-start">
                                <li className="nav-item active p-2 m-1">
                                    <button class="btn btn-outline-dark top-btns">
                                        <i class="fa-solid fa-house mx-1"></i>
                                        Services
                                    </button>
                                </li>

                                <li className="nav-item p-2 m-1">
                                    <button class="btn btn-outline-dark top-btns">
                                        <i class="fa-solid fa-circle-info mx-1"></i>
                                        About us
                                    </button>
                                </li>
                                <li className="nav-item p-2 m-1">
                                    <button class="btn btn-outline-dark top-btns">
                                        <i class="fa-solid fa-headset mx-1"></i>
                                        Contact Us
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-4 justify-content-center" style={{ width: "fit-content" }}>
                    <div className="navbar navbar-expand-md w-100 ml-0 h-100 justify-content-end nav-options">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav w-100 justify-content-end">
                                <li className="nav-item active p-2">
                                    <CommonButton variant="contained" color="primary" sx={specialBtns}>
                                        <AccountCircleRounded />
                                        Sign In
                                    </CommonButton>
                                </li>
                            </ul>
                        </div>
                        <span
                            className="navbar-toggler ellipsis"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <CommonButton variant="contained" color="primary" onClick={() => setShow(!show)}>
                                {
                                    show ? <CloseRounded /> : <MenuSharp />
                                }

                            </CommonButton>
                        </span>
                    </div>
                    <div className="mobileNavbar">
                        {
                            show ? <ul className="list" style={list}>
                                <li className="list-items">
                                    <CommonButton variant="text" color="primary" sx={mobileView} >
                                        Home
                                    </CommonButton>
                                </li>
                                <li className="list-items">
                                    <CommonButton sx={mobileView} variant="text" color="primary">
                                        HIRE
                                    </CommonButton>
                                </li>
                                <li className="list-items">
                                    <CommonButton color="primary" variant="contained" sx={mobileView} onClick={toggleOptions}>

                                        Login
                                    </CommonButton>
                                </li>
                            </ul> : null
                        }

                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
