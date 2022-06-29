import React from 'react'
import './profile.css'
import { motion } from 'framer-motion'

function Profile() {
    return (
        <div className="user-profile">
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                className="page-head">
                <h1>profile</h1>
            </motion.div>
            <div className="profile-section">

            </div>


        </div>
    )
}

export default Profile;