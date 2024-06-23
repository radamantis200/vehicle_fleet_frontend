import * as Yup from 'yup';

const PeopleValidationSchema = Yup.object({
    nombres: Yup.string().required('Nombres es obligatorio'),
    apellidos: Yup.string().required('Apellidos es obligatorio'),
    correo: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es obligatorio'),
    nacionalidad: Yup.string().required('Nacionalidad es obligatorio'),
    identificacion: Yup.string().required('Cedula es obligatorio'),
    catGeneroPersona_codGeneroPerosna: Yup.number().required('Género es obligatorio'),
    direccion: Yup.string().required('Dirección es obligatorio'),
    fechaNacimiento: Yup.string().required('Fecha de nacimiento es obligatorio'),
});


export default PeopleValidationSchema