import { useFormik } from 'formik';
import PeopleValidationSchema from '@/validation/PeopleValidation';
import useGender from "@/hooks/useGender"
import { Gender } from '@/types/genderType';
import FormInput from '@/components/form/FormInput';
import SelectForm from '@/components/form/FormSelect'
import FormTextArea from '@/components/form/FormTextArea';
import moment from 'moment';
import FormDatePicker from '@/components/form/FormDatePicker';

const transformGenderData = (data: Gender[]): { value: number, label: string }[] => {
    return data.map(item => ({
        value: item.codGenero,
        label: item.genero,
    }));
};

const AddPeople = () => {
    const date = moment().format();
    const { genderQuery } = useGender()
    const { data: gender } = genderQuery;

    const genderOptions = gender ? transformGenderData(gender.response) : [];

    const formik = useFormik({
        initialValues: {
            nombres: '',
            apellidos: '',
            correo: '',
            nacionalidad: '',
            catGeneroPersona_codGeneroPerosna: '',
            identificacion: '',
            direccion: '',
            fechaNacimiento: date,
        },
        validationSchema: PeopleValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return <>
        <div id="add-people" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Agregar
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="add-people">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <FormInput
                                    label="Nombres"
                                    name="nombres"
                                    id="nombres"
                                    type="text"
                                    placeholder="Nombres"
                                    value={formik.values.nombres}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.nombres && formik.errors.nombres ? formik.errors.nombres : undefined}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormInput
                                    label="Apellidos"
                                    name="apellidos"
                                    id="apellidos"
                                    type="text"
                                    placeholder="Apellidos"
                                    value={formik.values.apellidos}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.apellidos && formik.errors.apellidos ? formik.errors.apellidos : undefined}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormInput
                                    label="Identificacion"
                                    name="identificacion"
                                    id="identificacion"
                                    type="text"
                                    placeholder="Nacionalidad"
                                    value={formik.values.identificacion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.identificacion && formik.errors.identificacion ? formik.errors.identificacion : undefined}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormInput
                                    label="Correo electrónico"
                                    name="correo"
                                    id="correo"
                                    type="email"
                                    placeholder="Correo electrónico"
                                    value={formik.values.correo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.correo && formik.errors.correo ? formik.errors.correo : undefined}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormInput
                                    label="Nacionalidad"
                                    name="nacionalidad"
                                    id="nacionalidad"
                                    type="text"
                                    placeholder="Nacionalidad"
                                    value={formik.values.nacionalidad}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.nacionalidad && formik.errors.nacionalidad ? formik.errors.nacionalidad : undefined}
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Género</label>
                                <SelectForm
                                    data={genderOptions}
                                    defaultOption="Seleccione"
                                    id="catGeneroPersona_codGeneroPerosna"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={formik.values.catGeneroPersona_codGeneroPerosna}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.catGeneroPersona_codGeneroPerosna && formik.errors.catGeneroPersona_codGeneroPerosna ? formik.errors.catGeneroPersona_codGeneroPerosna : undefined}
                                />
                            </div>
                            <div className="relative">
                                <FormDatePicker
                                    value={formik.values.fechaNacimiento}
                                    onDateChange={(date) => formik.setFieldValue('fechaNacimiento', date)}
                                    label="Fecha de Nacimiento"
                                    inline={false}
                                    maxDate={new Date()}
                                    language='es-NI'
                                    showClearButton={false}
                                    showTodayButton={false}
                                    title={"Fecha de Nacimiento"}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormTextArea
                                    label="Descripción"
                                    name="direccion"
                                    id="direccion"
                                    placeholder="Escribe una descripción..."
                                    value={formik.values.direccion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.direccion && formik.errors.direccion ? formik.errors.direccion : undefined}
                                />
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AddPeople