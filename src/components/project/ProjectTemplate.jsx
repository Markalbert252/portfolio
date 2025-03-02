import BridgeProject from "./BridgeProject";
import ExbrainProject from "./ExbrainProject";

const ProjectTemplate = ({ project }) => {
    if(project.id == "bridge") {
        return <BridgeProject data={project} />;
    } else if(project.id == "exbrain-education") {
        return <ExbrainProject data={project} />
    }

    return <div className="w-full height-screen border border-secondary flex-shrink-0"></div>
};

export default ProjectTemplate;