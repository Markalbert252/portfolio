//react router dom
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./Navbar";
import Loading from "./Loading";

const RootLayout = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 2000);
    })
    return (
        <>
            {showLoading && <Loading />}
            {
                !showLoading && (
                    <div>
                        <Navbar />
                        <div className="w-full min-h-screen">
                            <div className="h-[120px]"></div>
                            <Outlet />
                        </div>
                    </div>)
            }
        </>
    )
}

export default RootLayout;