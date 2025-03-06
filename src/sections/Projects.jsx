import HorizontalScrollCarousel from "../components/project/HorizontalScrollCarousel";

//images
import BridgeHomeScreen from "./../assets/projects/mobile/bridge/home_screen.jpg";
import BridgeSplashScreen from "./../assets/projects/mobile/bridge/splash_screen.jpg";
import NightLifeHomeScreen from "./../assets/projects/mobile/nightlife/home_screen.jpg";
import NightLifeSplashScreen from "./../assets/projects/mobile/nightlife/splash_screen.jpg";

const projects = [
    {
        id: "bridge",
        title: "Bridge",
        subTitle: "Resume Creation Platform",
        type: "mobile",
        description: "Bridge Platform aims to help young people from Myanmar who want to work in IT in Japan to connect with Japanese companies more easily and directly for free. In addition, Bridge provides a service that can easily create the resume needed when applying for a job in a Japanese company.",
        techStacks: ["React Native", "Expo", "Typescript"],
        published: true,
        url: "https://bridge-mm.com",
        imgs: [BridgeHomeScreen, BridgeSplashScreen]
    },
    {
        id: "night-life",
        title: "Night Life",
        subTitle: "Explore Night Life",
        description: "",
        techStacks: ["React Native", "Expo", "Typescript"],
        published: false,
        url: "",
        imgs: [NightLifeHomeScreen, NightLifeSplashScreen]
    },
    {
        id: "exbrain-education",
        title: "My School",
        subTitle: "School Management System",
        type: "web",
        description: "This is an innovative educational website designed to enhance the learning experience for students, streamline administrative tasks for schools, and provide a user-friendly platform for teachers. This project aimed to bridge the gap between traditional education and the digital age, making education accessible and interactive.",
        techStacks: ["Vue", "Tailwind", "JavaScript", "Inerita", "Laravel", "MySQL"],
        published: true,
        url: "https://wwww.exbrainedu.com"
    },
];

const Projects = () => {
    return (
        <div id="project-section">
            <HorizontalScrollCarousel slides={projects} />
        </div>
    )
}

export default Projects;