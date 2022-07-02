import './profile-history.css'
import { motion } from 'framer-motion';

const ProfilePending = ({ showContent }) => {
    return (
        <>
            {
                showContent === 3 ? <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    className="pending-issue"></motion.div> : null
            }
        </>
    );
}

export default ProfilePending;