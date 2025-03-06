// motion
import { motion } from "motion/react";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const cardVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const Card = () => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 1
            }}
            className="profile-card rounded-2xl px-10 py-8"
        >
            {/* start img container */}
            <div className="img-container mb-5"></div>

            {/* start introduction  */}
            <div className="mb-8">
                <h2 className="font-semibold text-primary dark:text-white text-sm">My name is</h2>
                <h1 className="text-secondary text-2xl font-semibold mb-4">
                    Maung Thar Kyaw
                </h1>
                <p className="text-primary dark:text-white opacity-[0.6]">
                    Dedicated Fullstack Developer with experience in frontend, backend, and mobile development.
                </p>
            </div>

            {/* start social */}
            <div className="social flex justify-between items-center">
                <div className="bg-secondary h-[4px] w-[25px]"></div>
                <span className="text-secondary text-xl">
                    <a href="https://github.com/Markalbert252" target="_blank"><FaGithub /></a>
                </span>
                <span className="text-secondary text-xl">
                    <a href="" target="_blank"><FaInstagram /></a>
                </span>
                <span className="text-secondary text-xl">
                    <a href="" target="_blank"><FaFacebook /></a>
                </span>
                <span className="text-secondary text-xl">
                    <a href="https://www.linkedin.com/in/maung-thar-kyaw-834a56280/" target="_blank"><FaLinkedin /></a>
                </span>
                <div className="bg-secondary h-[4px] w-[25px]"></div>
            </div>
        </motion.div>
    );
};

export default Card;