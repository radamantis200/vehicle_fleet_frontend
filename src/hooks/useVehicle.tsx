import clientAxios from "@/http-common"
import { VehiclesType } from "@/types/VehicleType"
import { useQuery } from "@tanstack/react-query"

const useVehicle = () => {

    const loadVehicleQuery = async () => {
        const { data } = await clientAxios.get<VehiclesType>('/VehiculoAndDetalleVehiculo/Lista')
        return data
    }

    const vehicleQuery = useQuery({
        queryKey: ['vehiclesData'],
        queryFn: loadVehicleQuery,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        vehicleQuery
    }
}

export default useVehicle