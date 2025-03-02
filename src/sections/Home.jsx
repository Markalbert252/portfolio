import { useRef } from "react";

// components
import Card from "../components/home/Card";
import Content from "../components/home/Content";
import { useTheme } from "../hooks/useTheme";

// sections
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Tools from "./Tools";
import Experience from "./Experience";

// icons
import { GoHome } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";

// motion
import { motion, useScroll, useTransform } from "motion/react";

const Home = () => {
    const { theme, toggleTheme } = useTheme();

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div className="relative bg-white dark:bg-primary">
            {/* <Navbar changeTheme={toggleTheme}/> */}
            <dialog id="my_modal_3" className="modal" open>
                <div className="modal-box rounded-md">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello Guy!</h3>
                    <p className="py-4 text-red-500">In Developing Process, not finished yet!. Keep Going.</p>
                </div>
            </dialog>

            <div ref={targetRef} className="relative h-[120vh] container lg:max-w-[1160px] mx-auto px-5 md:px-0">
                {/* start introduction section */}
                <motion.div
                    style={{ opacity, scale }}
                    className="sticky top-0 h-auto md:h-screen grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-24"
                >
                    {/* start left block */}
                    <div className="flex items-center mb-5 md:mb-0">
                        <Card />
                    </div>

                    {/* start right block */}
                    <div className="flex items-center content-blk">
                        <Content changeTheme={toggleTheme} />
                    </div>
                </motion.div>
            </div>

            {/* start project section */}
            <Projects />

            {/* start tools section */}
            <Tools />

            {/* start experience section */}
            <Experience />
        </div>
    );
};

export default Home;
