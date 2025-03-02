import { useState, useEffect, useRef } from "react";

// motion
import { motion } from "motion/react";

// mockup
import { AndroidMockup } from "react-device-mockup";

// icons
import { MdOutlineArrowOutward } from "react-icons/md";

// image
import splashScreen from "../../assets/projects/mobile/bridge/splash_screen.jpg";
import homeScreen from "../../assets/projects/mobile/bridge/home_screen.jpg";

const leftMockupVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const rightMockupVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: -15,
    },
};

const projectInfoVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const BridgeProject = ({ data }) => {
    const {
        title,
        subTitle,
        description,
        techStacks,
        url
    } = data;
    const deviceContainerRef = useRef(null);
    const [deviceWidth, setDeviceWidth] = useState(0);

    useEffect(() => {
        if (deviceContainerRef.current) {
            setDeviceWidth(deviceContainerRef.current.offsetWidth * 0.3);
        }

        const handleResize = () => {
            if (deviceContainerRef.current) {
                setDeviceWidth(deviceContainerRef.current.offsetWidth * 0.3);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
            <div className="container lg:max-w-[1160px] mx-auto px-5 md:px-0 flex flex-col md:flex-row">
                <div
                    ref={deviceContainerRef}
                    className="w-full md:w-[50%] flex justify-center items-center mb-10 md:mb-0"
                >
                    <div className="flex items-center">
                        {/* start left device mockup */}
                        <motion.div
                            variants={leftMockupVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 1 }}
                        >
                            <AndroidMockup screenWidth={deviceWidth}>
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src={splashScreen}
                                        alt="bridge-splash-screen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </AndroidMockup>
                        </motion.div>

                        {/* start right mockup */}
                        <motion.div
                            variants={rightMockupVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 1 }}
                        >
                            <AndroidMockup
                                screenWidth={deviceWidth + deviceWidth * 0.2}
                            >
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src={homeScreen}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </AndroidMockup>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full md:w-[50%] flex items-center">
                    <motion.div
                        variants={projectInfoVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="text-center md:text-start"
                    >
                        <div className="mb-3">
                            <h2 className="text-secondary text-4xl md:text-5xl font-saira font-bold mb-3 md:mb-2">
                                {title}
                            </h2>
                            <p className="text-secondary text-2xl md:text-4xl font-saira font-bold opacity-[0.5] mb-2 md:mb-5">
                                {subTitle}
                            </p>
                            <p className="text-primary dark:text-white text-md text-start">
                                {description}
                            </p>
                        </div>
                        {techStacks.length > 0 && (
                            <div className="flex flex-wrap mb-5">
                                {techStacks.map(stack => <button key={stack} className="px-3 py-1 me-2 mb-2 border border-secondary text-secondary text-sm rounded-md">{stack}</button>)}
                            </div>
                        )}
                        <a href={url} className="text-white text-sm font-semibold flex items-center space-x-2 hover:text-secondary">{url} <span> <MdOutlineArrowOutward /></span></a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BridgeProject;
