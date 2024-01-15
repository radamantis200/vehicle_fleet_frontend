export interface VehiclesType {
    mensaje: string;
    response: Vehicle[];
}

export interface Vehicle {
    codVehiculo: number;
    catMarcaVehiculo_codMarcaVehiculo: number;
    codDetalleVehiculo: number;
    catEstadoVehiculo_codEstadoVehiculo: number;
    catSucursales_codSucursalesActual: number;
    catSucursales_codSucursalesReal: number;
    modelo: string;
    placa: string;
    chasis: string;
    serieMotor: string;
    toneladas: string;
    anio: string;
    rutaFoto: string;
    comentarios: string;
    fechaIngreso: Date;
}
