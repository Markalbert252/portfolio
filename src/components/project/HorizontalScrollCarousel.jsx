import { useRef } from "react";

// motion
import {
	motion,
	useScroll,
	useTransform
} from "motion/react";

// components
import ProjectTemplate from "./ProjectTemplate";

const HorizontalScrollCarousel = ({ slides }) => {
	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

	return (
		<div>
			<div ref={scrollRef} className="relative h-[300vh]">
				<div className="sticky top-0 h-screen overflow-hidden">
					<motion.div style={{ x }} className="flex">
						{
							slides.map(slide => {
								return (
									<ProjectTemplate project={slide} />
								)
							})
						}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalScrollCarousel;
