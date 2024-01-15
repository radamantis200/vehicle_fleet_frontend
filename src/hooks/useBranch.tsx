import clientAxios from "@/http-common"
import { BranchesType } from "@/types/BranchType"
import { useQuery } from "@tanstack/react-query"

const useBranch = () => {

    const loadBranchQuery = async () => {
        const { data } = await clientAxios.get<BranchesType>('/Sucursal/Lista')
        return data
    }

    const branchQuery = useQuery({
        queryKey: ['branchesData'],
        queryFn: loadBranchQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        branchQuery
    }
}

export default useBranch