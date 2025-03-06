import { motion } from "motion/react";
const contentVariants = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const Content = () => {
    return (
        <motion.div
            className="content-screen"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: 1,
                type: "spring",
                stiffness: 120,
            }}
        >
            <div className="text-center md:text-start">
                <h3 className="text-primary dark:text-white font-bold texl-2xl md:text-3xl mb-2 md:mb-5">
                    Hi, I am a
                </h3>
                <h1 className="flex flex-col text-secondary mb-5 md:mb-10">
                    <span className="text-6xl md:text-8xl font-bold">
                        Fullstack
                    </span>
                    <span className="text-5xl md:text-7xl opacity-[0.5] font-bold">
                        Developer
                    </span>
                </h1>
                <p className="text-primary dark:text-white text-md md:text-xl opacity-[0.8] mb-3 md:mb-5 md:mb-10">
                    I'm a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                </p>
                <button className="text-secondary font-saira font-bold border-2 border-secondary px-8 py-2 rounded-md hover:bg-secondary hover:text-white transition">
                    DOWNLOAD CV!
                </button>
            </div>
        </motion.div>
    )
}

export default Content;