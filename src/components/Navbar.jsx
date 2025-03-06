import { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../store/theme-content";

const Navbar = ({
    changeTheme
}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="navbar bg-transparent container lg:max-w-[1160px] mx-auto px-5 md:px-0 sticky top-0 z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost text-primary dark:text-white text-xl">Portfolio</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-primary dark:text-white">
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" checked={theme == 'dark'} onChange={toggleTheme} />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

    )
}

export default Navbar;