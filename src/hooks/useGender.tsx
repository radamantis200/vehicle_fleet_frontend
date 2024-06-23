import clientAxios from "@/http-common"
import { GenderType } from "@/types/genderType"
import { useQuery } from "@tanstack/react-query"

const useGender = () => {

    const loadGenderQuery = async () => {
        const { data } = await clientAxios.get<GenderType>('/Generos/Lista')
        return data
    }

    const genderQuery = useQuery({
        queryKey: ['genderData'],
        queryFn: loadGenderQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        genderQuery
    }
}

export default useGender