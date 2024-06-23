export type PeopleType = {
    response: PersonType[];
}

export type PersonType = {
    codPersona: number,
    catGeneroPersona_codGeneroPerosna: number,
    nombres: string,
    apellidos: string,
    descripcionGenero: string,
    nacionalidad: string,
    identificacion: string,
    fechaNacimiento: string,
    direccion: string,
    correo: string,
    estado: boolean
}

export interface PersonDelete {
    mensaje: string;
    response: any[];
}

export interface AddPerson {
    catGeneroPersona_codGeneroPerosna: number;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    identificacion: string;
    fechaNacimiento: string;
    direccion: string;
    correo: string;
}