//icons
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="fromlefts socialLinks flex space-x-5 mt-8 text-3xl text-[#10E956]">
            <a href="https://github.com/Markalbert252" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/maung-thar-kyaw-834a56280/" target="_blank"><FaLinkedin /></a>
        </div>
    )
}

export default SocialLinks;