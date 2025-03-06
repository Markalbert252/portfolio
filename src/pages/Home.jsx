// sections
import IntroductionSection from "../sections/Introduction";
import ProjectSection from "../sections/Projects";
import Tools from "../sections/Tools";
import Experience from "../sections/Experience";
import Modal from "../components/Modal";

// components

const Home = () => {
    return (
        <>
            <Modal />
            <div className="relative bg-white dark:bg-primary">
                <IntroductionSection />
                <ProjectSection />
                <Tools />
                <Experience />
            </div>
        </>
    )
}

export default Home;