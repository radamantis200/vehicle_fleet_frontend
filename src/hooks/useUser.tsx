import clientAxios from "@/http-common"
import { UsersType } from "@/types/UserType"
import { useQuery } from "@tanstack/react-query"

const useUser = () => {

    const loadUserQuery = async () => {
        const { data } = await clientAxios.get<UsersType>('/Usuario/Lista')
        return data
    }

    const userQuery = useQuery({
        queryKey: ['usersData'],
        queryFn: loadUserQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        userQuery
    }
}

export default useUser