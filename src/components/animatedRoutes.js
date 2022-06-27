import React from 'react';
import Landing from "../Landing/landing";
import Services from '../Sevices/services';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes