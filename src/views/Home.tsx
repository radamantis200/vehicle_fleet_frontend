import AddPeople from "@/components/people/modal/AddPeople"
import UpdatePeople from "@/components/people/modal/UpdatePeople"
import DeletePeople from "@/components/people/modal/DeletePeople"
import formatDate from "@/helpers/data"
import usePeople from "@/hooks/usePeople"

const Home = () => {
    const { peopleQuery } = usePeople()
    const { data: people, isLoading, isFetching } = peopleQuery
    return (
        <>
            <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                <div
                    className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-full mb-1">
                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Personas</h1>
                        </div>
                        <div className="md:flex">
                            <div
                                className="items-center hidden mb-3 md:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                            </div>
                            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                <AddPeople />
                                <a href="#"
                                    className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                    <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Export
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden shadow">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-all" aria-describedby="checkbox-1"
                                                        type="checkbox"
                                                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Nombres
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Apellidos
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Genero
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Nacionalidad
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Identificación
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Fecha de nacimiento
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Direccion
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Estado
                                            </th>
                                            <th scope="col"
                                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {isLoading || isFetching ? (<h2>Is Loading...</h2>) : (people?.response && people.response.map(people =>
                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox"
                                                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                    <img className="w-10 h-10 rounded-full"
                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                        alt="Neil Sims avatar" />
                                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                            {people.nombres}</div>
                                                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            {people.correo}</div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                                    {people.apellidos}</td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {people.descripcionGenero}</td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {people.nacionalidad}
                                                </td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {people.identificacion}
                                                </td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {formatDate(people.fechaNacimiento)}
                                                </td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {people.direccion}
                                                </td>
                                                <td
                                                    className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center">
                                                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                                                        {people.estado ? 'Activo' : 'Inactivo'}
                                                    </div>
                                                </td>
                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                    <UpdatePeople />
                                                    <DeletePeople />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <a href="#"
                            className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#"
                            className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                            className="font-semibold text-gray-900 dark:text-white">1-20</span> of <span
                                className="font-semibold text-gray-900 dark:text-white">2290</span></span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href="#"
                            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Previous
                        </a>
                        <a href="#"
                            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            Next
                            <svg className="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home