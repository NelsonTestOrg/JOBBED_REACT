import React, { useState } from 'react'
import './profile.css'
import photo from '../assets/images/man.png'
import { motion } from 'framer-motion'
import { ProfileDetails } from './profile-details';
import { ProfileHistory } from './profile-history'
import ProfilePending from './profile-pending';


function Profile() {
    const [showContent, setContent] = useState(1)

    const toggleTab = (index) => {
        setContent(index)
    }

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

                    <div className="profile-nav">
                        <div>
                            <div className="first-div">
                                <img src={photo} alt="" />
                                <h4 className="name">Sir.Gon Deez</h4>
                                <hr />
                            </div>
                            <div className='second-div'>
                                <ul>
                                    <li>
                                        <motion.button
                                            onClick={() => toggleTab(1)}
                                            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                            className={showContent === 1 ? "btn btn-dark" : "btn btn-outline-dark"}>
                                            Personal Details
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button
                                            onClick={() => toggleTab(2)}
                                            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                            className={showContent === 2 ? "btn btn-dark" : "btn btn-outline-dark"}>
                                            History
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button
                                            onClick={() => toggleTab(3)}
                                            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                            className={showContent === 3 ? "btn btn-dark" : "btn btn-outline-dark"}>
                                            Pending Orders
                                        </motion.button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='logout-div'>
                            <motion.button
                                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                className="btn btn-outline-danger logout">
                                Log Out
                            </motion.button>
                        </div>

                    </div>

                    <ProfileDetails showContent={showContent} setContent={setContent} />
                    <ProfileHistory showContent={showContent} setContent={setContent} />
                    <ProfilePending showContent={showContent} />

                </motion.div>

            </div>


        </motion.div>
    )
}

export default Profile;