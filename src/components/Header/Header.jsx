import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import profileImage from '../../assets/images/icons/profile-image.jpg'


const Header = () => {

    // TODO: Implementation of Active Link and adding user information on right side of the header

    return (
        <div className="bg-slate-950 py-2 ">
            <div className="w-11/12 mx-auto xl:flex justify-between">
                <div className="text-white xl:flex gap-5">
                    <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded mt-3 xl:mt-0" to='/'><FaHome></FaHome> Home</Link>
                    <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded mt-3 xl:mt-0"><BiMenu></BiMenu> Contents</Link>
                    <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded mt-3 xl:mt-0"><BiMenuAltLeft></BiMenuAltLeft> Categories</Link>
                    <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded mt-3 xl:mt-0"><FiSettings></FiSettings> Settings</Link>
                </div>
                <div className="flex items-center bg-white font-semibold rounded-full px-1 py-1 w-fit mt-3 xl:mt-0">
                    <img className="w-[30px] h-[30px] rounded-full" src={profileImage} alt="" />
                    <p>Ismail Ihsan Bulbul</p>
                </div>
            </div>
        </div>
    );
};

export default Header;