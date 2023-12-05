import React, { createContext, useEffect, useState } from "react"

type QuioscoContextProviderType = {
    children: React.ReactNode
}

type LayoutContextType = {
    isOpenSidebar: boolean
    colorTheme: string
    handleToggleSidebar: () => void
    handleColorTheme: () => void
}

const LayoutContext = createContext({} as LayoutContextType)

const LayoutProvider = ({ children }: QuioscoContextProviderType) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [colorTheme, setColorTheme] = useState("light")

    useEffect(() => {
        setLocalColorTheme()
    })

    const setLocalColorTheme = () => {
        let localColorTheme = localStorage.getItem("color-theme")

        if (!localColorTheme) {
            localColorTheme = "light"
            localStorage.setItem("color-theme", localColorTheme)
        }

        updateColorTheme(localColorTheme)
    }

    const updateColorTheme = (theme: string) => {
        setColorTheme(theme)

        if (theme === "light") {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }

    const handleColorTheme = () => {
        const newColorTheme = colorTheme === "light" ? "dark" : "light"
        localStorage.setItem("color-theme", newColorTheme)
        updateColorTheme(newColorTheme)
    }

    const handleToggleSidebar = () => {
        setIsOpenSidebar((prev) => !prev)
    }

    return (
        <LayoutContext.Provider
            value={{
                isOpenSidebar,
                colorTheme,
                handleToggleSidebar,
                handleColorTheme,
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export { LayoutProvider }
export default LayoutContext
