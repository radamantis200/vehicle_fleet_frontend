export type PeopleType = {
    response: PersonType[];
}

export type PersonType = {
    codPersona: number,
    nombres: string,
    apellidos: string,
    catGeneroPersona_codGeneroPerosna: number,
    nacionalidad: string,
    identificacion: string,
    fechaNacimiento: string,
    direccion: string,
    correo: string,
    estado: boolean
}