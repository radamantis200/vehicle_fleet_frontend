import LayoutContext from "@/context/LayoutProvider"
import { useContext } from "react"
const useLayout = () => {
    return useContext(LayoutContext)
}

export default useLayout