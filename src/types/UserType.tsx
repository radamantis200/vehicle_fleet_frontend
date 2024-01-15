export interface UsersType {
    mensaje: string;
    response: User[];
}

export interface User {
    codUsuario: number;
    tbPersona_codPerona: number;
    usuario: string;
    estado: boolean;
    nombrePersona: string;
}
