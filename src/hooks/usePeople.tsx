import clientAxios from "@/http-common"
import { PeopleType } from "@/types/PeopleType"
import { useQuery } from "@tanstack/react-query"

const usePeople = () => {
    const loadPeopleQuery = async () => {
        const { data } = await clientAxios.get<PeopleType>('/Persona/Lista')
        return data
    }

    const peopleQuery = useQuery({
        queryKey: ['peopleData'],
        queryFn: loadPeopleQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        peopleQuery
    }
}

export default usePeople