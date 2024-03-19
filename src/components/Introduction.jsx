//components
import SocialLinks from "./SocialLinks";


const Introduction = () => {
    return (
        <div className="container px-[20px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto sm:mt-10">
            <div className="block sm:flex items-center mb-3 sm:mb-5">
                {/* <div className="sm:mr-10">
                    <div className="custom-img-container w-[250px] h-[300px] bg-[#2F2A2A] flex justify-center items-center relative mx-auto">
                        <img className="absolute h-[300px]" src={profileImg} alt="" />
                    </div>
                </div> */}
                <div>
                    <div className="mb-3 sm:mb-6">
                        <div className="inline-block">
                            <p className="typeWriter mb-3 border-r-[5px] whitespace-nowrap overflow-hidden w-full text-white text-2xl sm:text-4xl font-bold sm:font-extrabold">I'm <span className="text-[#10E956]">Maung Thar Kyaw</span></p>
                        </div>
                        <p className="fromlefts myPosition text-2xl sm:text-3xl md:text-5xl font-bold sm:font-extrabold text-[#10E956]">Front-end Developer</p>
                    </div>
                    {/* <Button
                        ripple={true}
                        className="fromlefts downloadBtn flex items-center gap-3 bg-[#10E956]"
                    >
                        See Projects
                    </Button> */}
                </div>
            </div>
            <div>
                <p className="fromlefts selfIntroText text-white text-base font-light tracking-wide">
                    Frontend Developer specializing in mobile and web
                    development with a strong background in React.js and other modern
                    frameworks. Adept at translating design mockups into interactive and
                    user friendly interfaces. A quick learner who thrives in dynamic and
                    fast-paced environments, ready to bring innovative solutions to the
                    table.
                </p>
            </div>
            <div className="flex justify-center">
                <SocialLinks />
            </div>
        </div>
    );
};

export default Introduction;
