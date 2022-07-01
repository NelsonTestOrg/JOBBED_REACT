import React, { useState } from 'react'
import './profile.css'
import pass from '../assets/images/pass.png'
import { motion } from 'framer-motion'
import photo from '../assets/images/man.png'

export const ProfileDetails = ({ showContent }) => {
    const [passPage, setPassPage] = useState('profile')

    const switchTab = (tabName) => {
        setPassPage(tabName)
    }

    return (
        <>
            {showContent === 1 ?

                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    className="data">
                    <div className="buttons-div">
                        <motion.button
                            onClick={() => switchTab("profile")}
                            whileHover={{ scale: 1.05, textShadow: '0px 0px 8px white' }}
                            className={passPage === "profile" ? "btn btn-dark" : "btn btn-outline-dark"}>
                            <i class="fa-solid fa-circle-user px-2"></i>
                            My Details
                        </motion.button>
                        <motion.button
                            onClick={() => switchTab("password")}
                            whileHover={{ scale: 1.05, textShadow: '0px 0px 8px white' }}
                            className={passPage === "profile" ? "btn btn-outline-dark" : "btn btn-dark"}>
                            <i class="fa-solid fa-key px-2"></i>
                            Change Password
                        </motion.button>
                    </div>
                    {passPage === "profile" ? <motion.div
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}


                        className="my-profile">
                        <div className="info-div ">
                            <hr className='line-sep' />
                            <div className="info">
                                <div className="info-text">
                                    <h5 className='part-detail' >Personal Info</h5>
                                    <p>Update your personal infomation and profile photo here</p>
                                </div>
                                <div className="action-buttons">
                                    <motion.button whileHover={{ scale: 1.05, textShadow: '0px 0px 8px white' }} className="btn btn-secondary p-1">
                                        Cancel
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.05, textShadow: '0px 0px 8px white' }} className="btn btn-primary p-1">
                                        Save
                                    </motion.button>
                                </div>
                            </div>

                        </div>
                        <div className="edit-name ">
                            <hr className='line-sep' />
                            <div className="name-change">
                                <div className="abt"><h5 className='part-detail'>Name</h5></div>
                                <div className="name-field w-50">
                                    <div className="name-data">
                                        <h5 className='part-detail px-3' >Surname :</h5>
                                        <motion.input type="text" name="" id="" placeholder='Sir.Gon' whileFocus={{ backgroundColor: '#595959', color: 'white', boxShadow: '0px 0px 10px #4d4d4d' }} whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #4d4d4d' }} />
                                    </div>
                                    <div className="name-data">
                                        <h5 className='part-detail px-3' >Last Name :</h5>
                                        <motion.input type="text" name="" id="" placeholder='Deez' whileFocus={{ backgroundColor: '#595959', color: 'white', boxShadow: '0px 0px 10px #4d4d4d' }} whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #4d4d4d' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-name edit-email">
                            <hr className="line-sep" />
                            <div className="name-change">
                                <div className="abt">
                                    <h5 className="part-detail">Email</h5>
                                </div>
                                <div className='edit-em-dv py-3 px-3 w-50'>
                                    <motion.input type="email" name="" id="" className='edit-box' placeholder='sugondeez@gmail.com' whileFocus={{ backgroundColor: '#595959', color: 'white', boxShadow: '0px 0px 10px #4d4d4d' }} whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #4d4d4d' }} />
                                </div>

                            </div>
                        </div>
                        <div className="edit-name edit-photo">
                            <hr className="line-sep" />
                            <div className="photo-change">
                                <div className="abt">
                                    <h5 className="part-detail">Photo</h5>
                                    <p>This will be displayed on your profile</p>
                                </div>
                                <div className="photo-cont w-50">
                                    <div className="current-profile">
                                        <h5 className="part-detail">Current photo</h5>
                                        <img src={photo} alt="" className='photo-sm' />
                                    </div>
                                    <div className="new-profile form-control m-2 w-50">
                                        <div className="form-control p-4 my-2"><p>I'll do this later</p></div>
                                        {/* <button className="btn btn-outline-secondary w-100"><i class="fa-solid fa-file-circle-plus px-2"></i> Add new photo </button> */}
                                        <input type="file" name="" id="" className='image-picker' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-contacts edit-name">
                            <hr className="line-sep" />
                            <div className="contacts-change">
                                <div className="abt"><h5 className='part-detail'>Contacts</h5></div>
                                <div className="contact-info w-50">
                                    <h5 className="part-detail">Phone Number</h5>
                                    <motion.input type="number" name="" id="" maxLength="10" className='edit-box' placeholder='+254 714165105' whileFocus={{ backgroundColor: '#595959', color: 'white', boxShadow: '0px 0px 10px #4d4d4d' }} whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #4d4d4d' }} />
                                </div>
                            </div>
                        </div>
                    </motion.div> : <div className="passuwad">
                        <hr className='line-sep' />
                        <div className="password-head">
                            <img src={pass} alt="" />
                            <h3>Password Reset</h3>
                        </div>
                        <hr className='line-sep my-3' />
                        <div className="password-reset">
                            <div className="p-3">
                                <h5>Enter your email here to receive verification code</h5>
                            </div>
                            <div className='edit-em-dv py-3 px-3 w-50'>
                                <motion.input type="email" name="" id="" className='edit-box' placeholder='sugondeez@gmail.com' whileFocus={{ backgroundColor: '#595959', color: 'white', boxShadow: '0px 0px 10px #4d4d4d' }} whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #4d4d4d' }} />
                            </div>
                            <div className="p-3">
                                <buttom className="btn btn-success w-25 my-2">
                                    Send Verification Code
                                </buttom>

                            </div>
                        </div>
                    </div>}



                </motion.div>
                : null}

        </>



    )
}

export default ProfileDetails