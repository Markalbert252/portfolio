import HorizontalScrollCarousel from "../components/project/HorizontalScrollCarousel";

const projects = [
    {
        id: "bridge",
        title: "Bridge",
        subTitle: "Resume Creation Platform",
        type: "mobile",
        description: "This is an innovative educational website designed to enhance the learning experience for students, streamline administrative tasks for schools, and provide a user-friendly platform for teachers. This project aimed to bridge the gap between traditional education and the digital age, making education accessible and interactive.",
        techStacks: ["React Native", "Expo", "Node Js", "Express Js", "Mongo"],
        url: "https://bridge-mm.com"
    },
    {
        id: "exbrain-education",
        title: "My School",
        subTitle: "School Management System",
        type: "web",
        description: "This is an innovative educational website designed to enhance the learning experience for students, streamline administrative tasks for schools, and provide a user-friendly platform for teachers. This project aimed to bridge the gap between traditional education and the digital age, making education accessible and interactive.",
        techStacks: ["Vue", "Tailwind", "JavaScript", "Inerita", "Laravel", "MySQL"],
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