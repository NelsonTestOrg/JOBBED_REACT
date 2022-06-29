import React from 'react'
import './profile.css'
import { motion } from 'framer-motion'
import ProfileNav from './profile-nav';
import ProfileDetails from './profile-details';


function Profile() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="user-profile">
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                className="page-head">
                <h1>profile</h1>
            </motion.div>
            <div className="profile-section" >
                <motion.div
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    className="trans-cover">

                    <ProfileNav />
                    <ProfileDetails />

                </motion.div>

            </div>


        </motion.div>
    )
}

export default Profile;