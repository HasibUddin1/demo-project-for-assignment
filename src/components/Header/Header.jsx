import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";


const Header = () => {

    // TODO: Implementation of Active Link and adding user information on right side of the header

    return (
        <div className="bg-slate-950 text-white flex gap-5 px-10 py-2">
            <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded" to='/'><FaHome></FaHome> Home</Link>
            <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded"><BiMenu></BiMenu> Contents</Link>
            <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded"><BiMenuAltLeft></BiMenuAltLeft> Categories</Link>
            <Link className="flex items-center gap-1 hover:bg-slate-700 ease-in-out duration-200 px-2 rounded"><FiSettings></FiSettings> Settings</Link>
        </div>
    );
};

export default Header;