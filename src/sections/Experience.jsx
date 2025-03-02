const experiences = [
    {
        startDate: '2022',
        endDate: 'Present',
        position: 'Frontend Developer',
        company: 'Tech Solutions Ltd.',
        location: 'Remote',
        description: 'Developed and maintained responsive web applications using React and Vue.js. Collaborated with backend developers to integrate APIs and optimize performance. Implemented interactive UI components using Framer Motion and Tailwind CSS. Enhanced website accessibility and performance, achieving a 95+ Lighthouse score.',
        techStacks: ['react', 'vue', 'MySQL', 'Laravel']
    },
    {
        startDate: '2020',
        endDate: '2021',
        position: 'Junior Web Developer',
        company: 'InnovateX',
        location: 'New York, USA',
        description: 'Built and optimized UI components using HTML, CSS, and JavaScript. Assisted in migrating a legacy system to a modern Vue.js framework. Worked closely with designers to ensure a pixel-perfect implementation. Maintained and improved website SEO, increasing organic traffic by 30%.',
        techStacks: ['react', 'vue', 'MySQL', 'Laravel']
    }
];

const Timeline = ({
    experience,
    index
}) => {
    const {
        startDate,
        endDate,
        position,
        description,
        techStacks
    } = experience;
    return (
        <li key={experience.company}>
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className={`${index % 2 == 0 ? 'timeline-end text-start' : 'timeline-start text-end'} mb-10`}>
                <time className="font-mono italic text-primary dark:text-white">{startDate} - {endDate}</time>
                <div className="text-lg text-secondary font-semibold mb-2">{position}</div>
                <div className="hidden md:block">
                    <p className="text-primary dark:text-white mb-3">{description}</p>
                    <div className="flex-end flex-wrap space-x-2">
                        {techStacks.map(stack => <button className="text-secondary text-sm px-2 py-1 border border-secondary rounded-md" key={stack}>{stack}</button>)}
                    </div>
                </div>
            </div>
            <hr />
        </li>
    )
}

const Experience = () => {
    return (
        <div className="w-screen h-auto md:min-h-screen py-10 md:py-0">
            <div className="container lg:max-w-[1160px] mx-auto px-5 md:px-0">
                <h2 className="text-secondary text-4xl md:text-5xl text-center font-bold mb-5 md:mb-10">
                    Experiences
                </h2>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {experiences.map((experience, idx) => <Timeline experience={experience} index={idx + 1} />)}
                </ul>
            </div>
        </div>
    )
}

export default Experience;