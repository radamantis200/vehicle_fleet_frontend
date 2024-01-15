export interface BranchesType {
    mensaje: string;
    response: BranchType[];
}

export interface BranchType {
    codSucursales: number;
    catCiudad_codCiudad: number;
    descripcion: string;
    estado: boolean;
}
