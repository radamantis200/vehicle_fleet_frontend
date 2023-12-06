import { Outlet } from "react-router-dom"
import { LayoutProvider } from "@/context/LayoutProvider"

const AuthLayout = () => {
    return (
        <>
            <LayoutProvider>
                <main className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                        <Outlet />
                    </div>
                </main>
            </LayoutProvider>
        </>
    )
}

export default AuthLayout