import { PiWarningCircleBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TableSection = () => {
    return (
        <div className="mt-10 bg-white w-11/12 mx-auto rounded-xl px-10 py-10">
            <h1 className="text-2xl font-bold">Available Services</h1>
            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p>
            <div className="mt-3 flex items-center text-red-800 bg-red-50 rounded py-3 px-4 border border-red-400">
                <PiWarningCircleBold className="text-2xl"></PiWarningCircleBold>
                <p>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-gray-300 font-bold text-xl text-black rounded-ss-lg">Table Title</th>
                            <th className="bg-gray-300 font-bold text-xl text-black">Table Title</th>
                            <th className="bg-gray-300 font-bold text-xl text-black">Table Title</th>
                            <th className="bg-gray-300 font-bold text-xl text-black rounded-se-lg">Table Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Etiam purus in</th>
                            <td className="border-r-2">Curabitur donec duis</td>
                            <td className="border-r-2">Morbi pharetra, accumsan</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Duis eget habitant</th>
                            <td className="border-r-2">At amet odio</td>
                            <td className="border-r-2">Commando eget scelerisque</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Aliquam velit lacus</th>
                            <td className="border-r-2">Pellentesque egestas placerat</td>
                            <td className="border-r-2">Tortor habitant sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 4 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Fermentum scelerisque ultricies</th>
                            <td className="border-r-2">Morbi sagittis nulla</td>
                            <td className="border-r-2">Quam semper quis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 5 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Integar semper pellentesque</th>
                            <td className="border-r-2">Neque turpis enim</td>
                            <td className="border-r-2">Egestas non sociis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 6 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Parturient at id</th>
                            <td className="border-r-2">Sem neque, mattis</td>
                            <td className="border-r-2">Pellentesque facilisis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 7 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Amet, pertium eget</th>
                            <td className="border-r-2">In ipsum, volutpat</td>
                            <td className="border-r-2">Ut feugiat egestas</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 8 */}
                        <tr className="border-r-2 border-l-2">
                            <th className="border-r-2">Risus consequat sollicitudin</th>
                            <td className="border-r-2">Adispiscing odio nulla</td>
                            <td className="border-r-2">Pharetra id sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 9 */}
                        <tr className="border-r-2 border-l-2 border-b-2">
                            <th className="border-r-2">Risus consequat sollicitudin</th>
                            <td className="border-r-2">Adispiscing odio nulla</td>
                            <td className="border-r-2">Pharetra id sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-5">
                <FaArrowLeft></FaArrowLeft>
                <button className="border-2 px-4 py-2 rounded-xl hover:btn-ghost ease-in-out duration-200">1</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 ease-in-out duration-200">2</button>
                <button className="border-2 px-4 py-2 rounded-xl hover:btn-ghost ease-in-out duration-200">3</button>
                <button className="border-2 px-4 py-2 rounded-xl hover:btn-ghost ease-in-out duration-200">4</button>
                <button className="border-2 px-4 py-2 rounded-xl hover:btn-ghost ease-in-out duration-200">5</button>
                <FaArrowRight></FaArrowRight>
            </div>
        </div>
    );
};

export default TableSection;