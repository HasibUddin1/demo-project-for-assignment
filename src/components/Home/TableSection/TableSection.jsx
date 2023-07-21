import { PiWarningCircleBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TableSection = () => {
    return (
        <div className="mt-10 bg-white w-11/12 mx-auto rounded-xl px-10 py-5">
            <h1 className="text-2xl font-bold">Form title</h1>
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
                        <tr>
                            <th>Etiam purus in</th>
                            <td>Curabitur donec duis</td>
                            <td>Morbi pharetra, accumsan</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>Duis eget habitant</th>
                            <td>At amet odio</td>
                            <td>Commando eget scelerisque</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Aliquam velit lacus</th>
                            <td>Pellentesque egestas placerat</td>
                            <td>Tortor habitant sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>Fermentum scelerisque ultricies</th>
                            <td>Morbi sagittis nulla</td>
                            <td>Quam semper quis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>Integar semper pellentesque</th>
                            <td>Neque turpis enim</td>
                            <td>Egestas non sociis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <th>Parturient at id</th>
                            <td>Sem neque, mattis</td>
                            <td>Pellentesque facilisis</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 7 */}
                        <tr>
                            <th>Amet, pertium eget</th>
                            <td>In ipsum, volutpat</td>
                            <td>Ut feugiat egestas</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 8 */}
                        <tr>
                            <th>Risus consequat sollicitudin</th>
                            <td>Adispiscing odio nulla</td>
                            <td>Pharetra id sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                        {/* row 9 */}
                        <tr>
                            <th>Risus consequat sollicitudin</th>
                            <td>Adispiscing odio nulla</td>
                            <td>Pharetra id sit</td>
                            <td className="flex gap-3">
                                <button className="bg-blue-700 px-3 py-1 text-white rounded hover:bg-blue-900 ease-in-out duration-200">Edit</button>
                                <button className="bg-amber-600 px-3 py-1 text-white rounded hover:bg-amber-800 ease-in-out duration-200">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
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