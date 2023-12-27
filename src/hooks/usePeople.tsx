import clientAxios from "@/http-common"
import { PeopleType, PersonDelete } from "@/types/PeopleType"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const usePeople = () => {
    const queryClient = useQueryClient()

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
        mutationFn: deletePeopleQuery,
        onSuccess: () => {
            queryClient.resetQueries({ queryKey: ["peopleData"], exact: true })
        }
    })

    return {
        peopleQuery,
        deleteQuery
    }
}

export default usePeople