import { useEffect, useState } from "react";

// motion
import { motion } from "motion/react";

// components
import Card from "../components/tool/Card";
import Tab from "../components/tool/Tab";
import Stack from "../components/tool/Stack";

// images
const images = import.meta.glob("../assets/languages/*.{png,jpg,jpeg,svg}", { eager: true });

const imageMap = Object.keys(images).reduce((acc, path) => {
    const key = path.split("/").pop().replace(/\.\w+$/, ""); // Extract filename without extension
    acc[key] = images[path].default;
    return acc;
}, {});

const skills = [
    {
        category: "Front-End",
        languages: [
            { name: "Tailwind", icon: imageMap["tailwind"], percentage: 80 },
            { name: "JavaScript", icon: imageMap["js"], percentage: 70 },
            { name: "React", icon: imageMap["react"], percentage: 60 },
            { name: "Vue", icon: imageMap["vue"], percentage: 50 },
        ],
    },
    {
        category: "Back-End",
        languages: [
            { name: "PHP", icon: imageMap["php"], percentage: 70 },
            { name: "Laravel", icon: imageMap["laravel"], percentage: 60 },
            { name: "Node Js", icon: imageMap["node"], percentage: 40 },
            { name: "Express Js", icon: imageMap["express"], percentage: 30 },
        ],
    },
    {
        category: "Others",
        languages: [
            { name: "MongoDB", icon: imageMap["mongodb"], percentage: 30 },
            { name: "MySQL", icon: imageMap["mysql"], percentage: 60 }
        ],
    },
];

const data_stacks = [
    {
        id: "mern-stack",
        title: "MERN Stack",
        description: "Experienced in MERN stack (MongoDB, Express.js, React.js, Node.js) development, I craft dynamic and responsive web applications, ensuring seamless integration and optimal performance across the entire stack.",
        icons: [imageMap["mongodb"], imageMap["express"], imageMap["react"], imageMap["node"]]
    },
    {
        id: "vilt-stack",
        title: "VILT Stack",
        description: "Proficient in Vue.js, Inertia.js, Laravel, and Tailwind CSS, I specialize in crafting top-tier web applications with smooth functionality and intuitive user interfaces. My expertise lies in developing high-quality digital solutions that prioritize user experience and seamless performance.",
        icons: [imageMap["vue"], imageMap["laravel"], imageMap["tailwind"]]
    }
]

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [stacks, setStacks] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [selectedTool, setSelectedTool] = useState(null);

    const onSelectTab = (category) => {
        const activeTool = skills.filter(skill => skill.category == category)[0];
        setActiveTab(category);
        setSelectedTool(activeTool);
    }

    useEffect(() => {
        const initialActiveTool = skills[0];
        setActiveTab(initialActiveTool.category);
        setSelectedTool(initialActiveTool);
        setTools(skills);
        setStacks(data_stacks);
    }, []);

    useEffect(() => {
        console.log(selectedTool);
    }, [selectedTool]);

    const toolVariants = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const stackVariants = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <div className="w-full h-auto md:min-h-screen py-10 md:py-0">
            <div className="container lg:max-w-[1160px] mx-auto px-5 md:px-0">
                <h2 className="text-secondary text-4xl md:text-5xl text-center font-bold mb-5 md:mb-10">
                    Tools & Stacks
                </h2>
                <motion.div
                    className="mb-10 md:mb-24"
                    variants={toolVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 1 }}
                >
                    <div className="block md:hidden">
                        <Tab menu={skills} activeItem={activeTab} onSelectTab={onSelectTab} />
                        <div className="flex justify-center mt-5">
                            <div className="grid grid-cols-2 gap-5">
                                {selectedTool && selectedTool.languages.map(({ name, percentage, icon }) => <Card key={name} title={name} percentage={percentage} icon={icon} />)}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-3">
                            {tools.length > 0 && tools.map(({ category, languages }) => {
                                return (
                                    <div key={category} className="flex justify-center">
                                        <div>
                                            <h2 className="text-primary dark:text-white text-center font-semibold mb-2">{category}</h2>
                                            <div className="grid grid-cols-2 gap-5">
                                                {languages.map(({ name, percentage, icon }) => <Card key={name} title={name} percentage={percentage} icon={icon} />)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 md:gap-10"
                    variants={stackVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 1 }}
                >
                    {stacks.map((stack, idx) => <div key={stack.id} className={`${idx + 1 == stacks.length ? '' : 'mb-5'}`}><Stack data={stack} /></div>)}
                </motion.div>
            </div>
        </div>
    )
}

export default Tools;