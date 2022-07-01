import React from 'react'
import './profile-history.css'
import { motion } from 'framer-motion'
import history from '../assets/images/history-book.png'

export const ProfileHistory = ({ showContent }) => {

    return (
        <>
            {showContent === 2 ? <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                className="profile-history">
                <div className="history-head">
                    <img src={history} alt="" />
                    <h3>History</h3>
                </div>
                <hr />
                <div className="history-table-div">
                    <table class="table">
                        <thead>
                            <tr className='w-100'>
                                <td ><h6>#</h6> </td>
                                <td ><h6>Issue</h6> </td>
                                <td ><h6>Lifespan</h6> </td>
                                <td ><h6>Status</h6> </td>
                                <td ><h6>Handler</h6> </td>
                                <td ><h6>Actions</h6> </td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

            </motion.div> : null}
        </>


    )
}
