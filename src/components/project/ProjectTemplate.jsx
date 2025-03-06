import ExbrainProject from "./ExbrainProject";
import MobileTemplate from "./MobileTemplate";


const ProjectTemplate = ({ project }) => {
    if(project.id == "bridge") {
        return <MobileTemplate data={project} />
    } else if(project.id == "exbrain-education") {
        return <ExbrainProject data={project} />
    } else if(project.id == "night-life") {
        return <MobileTemplate data={project} />
    }

    return <div className="w-full h-[calc(100vh-80px)] border border-secondary flex-shrink-0"></div>
};

export default ProjectTemplate;