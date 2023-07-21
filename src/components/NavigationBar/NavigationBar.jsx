import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const NavigationBar = () => {
    // TODO: Implementation of active link and hovering effect for every link elements

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const { logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Your account has been created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="bg-gray-800 h-screen sticky top-0 overflow-y-auto text-white font-bold text-xl flex flex-col py-10">
            <div className="relative">
                <Link className="border-b-2 border-gray-600 flex items-center justify-between px-20" onClick={toggleDropdown}>Dashboard <FaArrowDown></FaArrowDown></Link>
                {isDropdownOpen && (
                    <div className="mt-2 text-white rounded py-2 mx-24 px-4 flex flex-col gap-4 w-36">
                        {/* Dropdown Content */}
                        <Link>Commerce</Link>
                        <Link>Analytics</Link>
                        <Link>Crypto</Link>
                        <Link>Help Desk</Link>
                        <Link>Monitoring</Link>
                        <Link>Fitness</Link>
                    </div>
                )}
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Application <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Elements <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Forms <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Plugins <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Elements <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Data Grid <FaArrowDown></FaArrowDown></Link>
                <Link className="flex justify-between items-center mt-3 border-b-2 border-gray-600 px-20" to="/demo">Settings <FaArrowDown></FaArrowDown></Link>
                <div className="text-center">
                    <button onClick={handleLogOut} className="mt-3 btn btn-outline btn-error">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;