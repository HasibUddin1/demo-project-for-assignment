
import { FaPlus } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AddNewPost = () => {
    return (
        <div className="flex justify-between items-center px-10 py-2 bg-white">
            <div className="flex gap-1 items-center">
                <h2 className="text-3xl font-bold">Add new post</h2>
                <button className="text-xl flex items-center gap-1 hover:bg-slate-400 ease-in-out duration-200 px-6 py-2 rounded-xl"><FaPlus></FaPlus> Add Content</button>
                <button className="text-xl flex items-center gap-1 hover:bg-slate-400 ease-in-out duration-200 px-6 py-2 rounded-xl"><FiSettings></FiSettings> Settings</button>
            </div>
            <div className="w-1/5">
                <input className="px-4 py-1 border-2 border-slate-400 rounded w-full" type="text" name="" id="" placeholder="Search Content" />
            </div>
        </div>
    );
};

export default AddNewPost;