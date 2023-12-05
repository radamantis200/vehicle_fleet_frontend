import { Outlet } from "react-router-dom"
import { LayoutProvider } from "@/context/LayoutProvider"
import Sidebar from "@/components/sidebar/Sidebar"
import Header from "@/components/header/Header"

export default function Layout() {
    return (
        <>
            <LayoutProvider>
                <Header />
                <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Sidebar />
                    <Outlet />
                </div>
            </LayoutProvider>
        </>
    )
}
