import React from 'react';
import "../css/main.css";
import logo from "../assets/images/jobbed_w.png"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function Footer() {

    const rem = {
        textDecoration: "none"
    }
    return (
        <div className="footer-section">
            <div className="copyright-container">
                <div className="logo-holder">
                    <Link to="/">
                        <img
                            style={{ width: "15rem", height: "6rem", objectFit: "cover" }}
                            src={logo}
                            alt="GIGR Logo"
                        />
                    </Link>
                </div>
                <div className="cpr-text">
                    <h5>©copyright GIGR 2022</h5>
                    <h5>All rights reserved</h5>
                </div>
                <div className="social-links">
                    <ul>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-facebook-square"></i></li>
                        <li><i className="fa-brands fa-twitter-square"></i></li>
                    </ul>
                </div>
            </div>
            <div className="about-container">
                <ul>
                    <li><h3>About US</h3></li>
                    <li><h6>About Us</h6></li>
                    <li><h6>Contact Us</h6></li>
                    <li><h6>Community</h6></li>
                    <li><h6>FAQ's</h6></li>
                </ul>
            </div>
            <div className="about-container">
                <ul>
                    <li><h3>Resources</h3></li>
                    <li>
                        <Link to="/services" style={rem}>
                            <motion.h6 whileHover={{ textShadow: '0px 0px 8px #ffdd43', color: '#ffdd43' }}>Get Hired</motion.h6>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" style={rem}>
                            <motion.h6 whileHover={{ textShadow: '0px 0px 8px #ffdd43', color: '#ffdd43' }}>Find A HandyMan</motion.h6>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="joinUs-container">
                <ul>
                    <li><h3>Join Us</h3></li>
                    <li>
                        <motion.input whileFocus={{ backgroundColor: 'white' }} whileHover={{ backgroundColor: 'rgba(255,255,255,0.7)', scale: 1.05 }} type="text" placeholder='Enter your Email here' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer