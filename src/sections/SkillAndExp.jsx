// components
import MainTitle from "../components/MainTitle";
import Stack from "../components/skillAndExp/Stack";
import Card from "../components/skillAndExp/Card";
import ScrollAnimation from "../components/ScrollAnimation";

//images
import htmlImg from "../assets/languages/html.png";
import cssImg from "../assets/languages/css.png";
import javascriptImg from "../assets/languages/js.png";
import reactImg from "../assets/languages/react.png";
import nodeImg from "../assets/languages/node.png";
import tailwindImg from "../assets/languages/tailwind.png";
import vueImg from "../assets/languages/vue.png";
import phpImg from "../assets/languages/php.png";
import mysqlImg from "../assets/languages/mysql.png";
import mongoImg from "../assets/languages/mongodb.png";
import inertiaImg from "../assets/languages/inertia.png";
import laravelImg from "../assets/languages/laravel.png";
import javaImg from "../assets/languages/java.png";

import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";

const SkillAndExp = () => {
    useEffect(() => {
        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }, []);
    return (
        <div className="w-[90vw] mx-auto">
            <MainTitle text="Skills & Experiences" extraClass="mb-10" />

            {/* grid grid-cols-1 md:grid-cols-2 */}
            <div className="block md:flex justify-center items-center mb-[50px] md:space-x-10">
                <div className="fromlefts w-full mb-5 md:w-1/2 md:mb-0">
                    <Stack
                        stackTitle="MERN Stack"
                        stackItems={[
                            {
                                stackItemName: "Mongo",
                                imgUrl: mongoImg,
                            },
                            {
                                stackItemName: "React",
                                imgUrl: reactImg,
                            },
                            {
                                stackItemName: "Node",
                                imgUrl: nodeImg,
                            },
                        ]}
                    >
                        Experienced in MERN stack (MongoDB, Express.js, React.js, Node.js)
                        development, I craft dynamic and responsive web applications,
                        ensuring seamless integration and optimal performance across the
                        entire stack.
                    </Stack>
                    <Stack
                        extraClasses="mt-5"
                        stackTitle="VILT Stack"
                        stackItems={[
                            {
                                stackItemName: "Vue",
                                imgUrl: vueImg,
                            },
                            {
                                stackItemName: "Inertia",
                                imgUrl: inertiaImg,
                            },
                            {
                                stackItemName: "Laravel",
                                imgUrl: laravelImg,
                            },
                            {
                                stackItemName: "Tailwind",
                                imgUrl: tailwindImg,
                            },
                        ]}
                    >
                        Proficient in Vue.js, Inertia.js, Laravel, and Tailwind CSS, I
                        specialize in crafting top-tier web applications with smooth
                        functionality and intuitive user interfaces. My expertise lies in
                        developing high-quality digital solutions that prioritize user
                        experience and seamless performance.
                    </Stack>
                </div>

                <div className="fromrights w-full md:w-1/2 flex flex-wrap justify-center items-center gap-3 bg-[#0c8c34] rounded-md p-3">
                    <Card cardTitle="HTML" cardImgUrl={htmlImg} />
                    <Card cardTitle="CSS" cardImgUrl={cssImg} />
                    <Card cardTitle="JavaScript" cardImgUrl={javascriptImg} />
                    <Card cardTitle="React" cardImgUrl={reactImg} />
                    <Card cardTitle="Tailwind" cardImgUrl={tailwindImg} />
                    <Card cardTitle="Vue" cardImgUrl={vueImg} />
                    <Card cardTitle="Node" cardImgUrl={nodeImg} />
                    <Card cardTitle="Php" cardImgUrl={phpImg} />
                    <Card cardTitle="Laravel" cardImgUrl={laravelImg} />
                    <Card cardTitle="MySQL" cardImgUrl={mysqlImg} />
                    <Card cardTitle="Mongo" cardImgUrl={mongoImg} />
                    <Card cardTitle="Java" cardImgUrl={javaImg} />
                </div>
            </div>

            <div className="container sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-center items-center pb-10">
                <div>
                    <Timeline>
                        <TimelineItem className="pb-[30px]">
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-[#10E956]" />
                                <ScrollAnimation>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        2023 October - 2024 March
                                    </Typography>
                                </ScrollAnimation>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <ScrollAnimation>
                                    <div className="bg-[#282e31] py-3 px-5 rounded-md text-white">
                                        <h2 className="text-white text-2xl">Mobile Developer</h2>
                                        <p className="text-base">
                                            developed mobile applications using React Native, with a
                                            focus on crafting dynamic and engaging user
                                            experiences. Collaborated closely with cross-functional
                                            teams, including UX/UI designers and backend developers,
                                            to translate design mockups and high-performance mobile
                                            applications. Conducted thorough testing and debugging to
                                            ensure high-quality software.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-[#10E956]" />
                                <ScrollAnimation>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        2023 May - 2023 September
                                    </Typography>
                                </ScrollAnimation>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <ScrollAnimation>
                                    <div className="bg-[#282e31] py-3 px-5 rounded-md text-white">
                                        <h2 className="text-white text-2xl">Web Developer</h2>
                                        <p className="text-base">
                                            Developed Software projects using VLIT ( Vue,Inertia,
                                            Laravel, Tailwind ) stack, and MERN ( Mongo, Express,
                                            React, Node). Adept at driving projects from ideation to
                                            implementation, encompassing the creating of React
                                            applications, database architecture, and full-cycle
                                            development of both frontend UI and backend systems.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default SkillAndExp;
