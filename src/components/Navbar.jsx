import { useEffect, useState } from "react";

//react router dom
import { NavLink } from "react-router-dom";

//react icons
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const activeClass = `bg-[#10E956] text-dark text-xl font-medium py-1.5 px-4 rounded-md transition-all duration-300 ease-in-out`;
    const inActiveClass = `text-white text-xl font-medium py-1.5 px-4 rounded-md transition-all duration-300 ease-in-out hover:text-[#10E956]`;
    const activClassMobile = `text-[#10E956] text-xl font-medium`;
    const inActiveClassMobile = `text-white text-xl font-medium hover:text-[#10E956]`;

    const openMobileNav = () => {
        setIsMobileNavVisible(true);
    }

    const closeMobileNav = () => {
        setIsMobileNavVisible(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={
                scrolling 
                ? "bg-[#121111] border-b-4 border-b-[#10E956] opacity-95 w-full z-30 h-[100px] leading-[120px] fixed transition-all"
                : " bg-transparent w-full z-30 h-[100px] leading-[120px] fixed transition-all"
            }>
                <div className="px-[20px] sm:px-[50px] mx-auto flex items-center justify-between">
                    <div><a href="#" className="text-white text-2xl font-semibold">Portfolio</a></div>
                    <ul className="hidden sm:inline-flex">
                        <li className="">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activeClass
                                        : inActiveClass
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/experiences&skills"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activeClass
                                        : inActiveClass
                                }}
                            >
                                Skills & Experiences
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activeClass
                                        : inActiveClass
                                }}
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mobileNav block sm:hidden">
                        {
                            isMobileNavVisible
                                ? <RxCross2 className="text-white text-3xl" onClick={closeMobileNav} />
                                : <MdMenu className="text-white text-3xl" onClick={openMobileNav} />
                        }
                    </div>
                </div>
            </nav>
            {isMobileNavVisible && (
                <div className="mobileNav fixed top-0 bottom-0 right-0 w-2/3 h-full bg-[#121111] z-10">
                    <ul className="pt-[120px]">
                        <li className=" py-3 px-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activClassMobile
                                        : inActiveClassMobile
                                }}
                                onClick={closeMobileNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className=" py-3 px-4">
                            <NavLink
                                to="/experiences&skills"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activClassMobile
                                        : inActiveClassMobile
                                }}
                                onClick={closeMobileNav}
                            >
                                Skills & Experiences
                            </NavLink>
                        </li>
                        <li className=" py-3 px-4">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => {
                                    return isActive
                                        ? activClassMobile
                                        : inActiveClassMobile
                                }}
                                onClick={closeMobileNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar;