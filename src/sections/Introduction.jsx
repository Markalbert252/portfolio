// react
import { useRef } from "react";

// motion
import { motion, useScroll, useTransform } from "motion/react";

// components
import Card from "../components/home/Card";
import Content from "../components/home/Content";

const Introduction = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    return (
        <div
            ref={targetRef}
            className="relative h-[120vh] container lg:max-w-[1160px] mx-auto px-5 md:px-0"
        >
            <motion.div
                style={{
                    opacity,
                    scale
                }}
                className="sticky top-0 h-auto md:h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-24"
            >
                {/* start left block */}
                <div className="flex items-center mb-5 md:mb-0">
                    <Card />
                </div>

                {/* start right block */}
                <div className="flex items-center content-blk">
                    <Content />
                </div>
            </motion.div>
        </div>
    )
}

export default Introduction;