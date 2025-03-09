// motion
import { motion } from "motion/react";

// images
import homeScreen from "../../assets/projects/web/exbrain.png";

// icons
import { MdOutlineArrowOutward } from "react-icons/md";

const mockupVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const projectInfoVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0
    },
};

const ExbrainProject = ({ data }) => {
    const {
        title,
        subTitle,
        description,
        techStacks,
        url
    } = data;

    return (
        <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
            <div className="container lg:max-w-[1160px] mx-auto px-5 md:px-0 flex flex-col md:flex-row">
                <div className="w-full md:w-[60%] flex items-center">
                    <motion.div
                        variants={mockupVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0.4 }}
                        className="mockup-browser bg-base-300 border w-[95%]"
                    >
                        <div className="mockup-browser-toolbar">
                            <div className="input">{url}</div>
                        </div>
                        <img
                            className="w-auto object-cover"
                            src={homeScreen}
                            alt="exbrain-education"
                        />
                    </motion.div>
                </div>
                <div className="w-full md:w-[40%] mt-10 md:mt-0 flex items-center">
                    <motion.div
                        variants={projectInfoVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        <div className="mb-3">
                            <h2 className="text-secondary text-4xl md:text-5xl font-saira font-bold mb-3 md:mb-2">
                                {title}
                            </h2>
                            <p className="text-secondary text-2xl md:text-4xl font-saira font-bold opacity-[0.7] mb-2 md:mb-5">
                                {subTitle}
                            </p>
                            <p className="text-primary dark:text-white text-md opacity-[0.9]">
                                {description}
                            </p>
                        </div>
                        {techStacks.length > 0 && (
                            <div className="flex flex-wrap mb-5">
                                {techStacks.map(stack => <button key={stack} className="px-3 py-1 me-2 mb-2 border border-secondary text-secondary text-sm rounded-md">{stack}</button>)}
                            </div>
                        )}
                        <a href={url} className="text-primary dark:text-white text-sm font-semibold flex items-center space-x-2 hover:text-secondary">{url} <span> <MdOutlineArrowOutward /></span></a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ExbrainProject;
