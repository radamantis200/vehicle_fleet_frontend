import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { initFlowbite } from "flowbite";
import Sidebar from "@/components/sidebar/Sidebar"
import Header from "@/components/header/Header"

export default function Layout() {
    useEffect(() => {
        initFlowbite()
    }, [])
    return (
        <>
            <Header />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                {/* <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div> */}
                <Outlet />
            </div>
        </>
    )
}
