import MainTitle from "../components/MainTitle";
import bridgeImage from "./../assets/projects/bridge.png";
import exbrainImage from "./../assets/projects/exbrain.png";

import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
const Projects = () => {
    return (
        <div className="w-[90vw] mx-auto">
            <MainTitle text="Projects" extraClass="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2  py-[100px]">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img className="projectImgLeft" src={bridgeImage} alt="" />
                    </div>
                </div>
                <div className="warpper flex flex-col items-center">
                    <h1 className="projectTitle text-2xl text-[#14e956] px-5 py-3 border-4 border-[#14e956] mb-8">Bridge</h1>
                    <p className="text-white text-lg font-light tracking-wide">
                        Built a platform to help young people from Myanmar who want to work in IT in Japan to connect with
                        Japanese companies more easily and directly for free. In addition, Bridge provides a service that can easily
                        create the resume needed when applying for a job in a Japanese company.
                    </p>
                    <div className="mt-5">
                        <a href="https://bridge-mm.com/" target="_blank">
                            <Button
                                ripple={true}
                                className="flex items-center gap-3 bg-[#10E956]"
                            >
                                <span className="text-black text-md font-bold">Visit</span>
                                <FaArrowRight className="text-black text-md" />
                            </Button>
                        </a>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-[100px]">
                <div className="md:hidden flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img className="projectImgRight" src={exbrainImage} alt="" />
                    </div>
                </div>
                <div className="warpper flex flex-col items-center">
                    <h1 className="projectTitle text-2xl text-[#14e956] px-5 py-3 border-4 border-[#14e956] mb-8">Exbrain Education</h1>
                    <p className="text-white text-lg font-light tracking-wide">
                        MySchool is a comprehensive School Management system designed to streamline
                        student record management, exam tracking, and communication between
                        students and teachers. With real-time messaging capabilities, it facilitates
                        seamless interaction within the school community. Additionally, it automates the
                        monthly mailing of student report cards, ensuring timely dissemination of
                        academic progress. Students can easily access their records through
                        personalized accounts, allowing for convenient monitoring of their academic
                        performance. Moreover, the system incorporates innovative certificate
                        generation functionality through QR code scanning, enhancing administrative
                        efficiency and document security.
                    </p>
                    <div className="mt-5">
                        <a href="https://www.exbrainedu.com/" target="_blank">
                            <Button
                                ripple={true}
                                className="flex items-center gap-3 bg-[#10E956]"
                            >
                                <span className="text-black text-md font-bold">Visit</span>
                                <FaArrowRight className="text-black text-md" />
                            </Button>
                        </a>

                    </div>
                </div>
                <div className="hidden md:flex md:justify-center md:items-center">
                    <div className="flex justify-center items-center">
                        <img className="projectImgRight" src={exbrainImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;