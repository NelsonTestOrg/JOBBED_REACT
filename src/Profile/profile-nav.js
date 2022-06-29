import React from 'react'
import { motion } from 'framer-motion'
import photo from '../assets/images/man.png'

function ProfileNav() {
    return (
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
                                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                className="btn btn-outline-dark">
                                Personal Details
                            </motion.button>
                        </li>
                        <li>
                            <motion.button
                                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                className="btn btn-outline-dark">
                                History
                            </motion.button>
                        </li>
                        <li>
                            <motion.button
                                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px white' }}
                                className="btn btn-outline-dark">
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
    )
}

export default ProfileNav