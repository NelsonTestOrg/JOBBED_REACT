import './profile-history.css'
import pending from '../assets/images/pending.png'
import { motion } from 'framer-motion';

const ProfilePending = ({ showContent }) => {
    return (
        <>
            {
                showContent === 3 ? <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    className="profile-history">
                    <div className="history-head p-3">
                        <img src={pending} alt="" />
                        <h3>Pending Orders</h3>
                    </div>
                    <hr />
                    <div className="history-table-div">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td ><h6>#</h6> </td>
                                    <td ><h6>Issue</h6> </td>
                                    <td ><h6>Lifespan</h6> </td>
                                    <td ><h6>Status</h6> </td>
                                    <td ><h6>Handler</h6> </td>
                                    <td ><h6>Actions</h6> </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-4'>
                                        No Available Issues
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </motion.div> : null
            }
        </>
    );
}

export default ProfilePending;