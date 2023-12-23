import clientAxios from "@/http-common"
import { PeopleType, PersonDelete } from "@/types/PeopleType"
import { useMutation, useQuery } from "@tanstack/react-query"

const usePeople = () => {

    const loadPeopleQuery = async () => {
        const { data } = await clientAxios.get<PeopleType>('/Persona/Lista')
        return data
    }

    const deletePeopleQuery = async (id: number) => {
        const { data } = await clientAxios.post<PersonDelete>('/Persona/Inactivar', { 'codPersona': id })
        return data
    }

    const peopleQuery = useQuery({
        queryKey: ['peopleData'],
        queryFn: loadPeopleQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    const deleteQuery = useMutation({
        mutationFn: deletePeopleQuery
    })

    return {
        peopleQuery,
        deleteQuery
    }
}

export default usePeople