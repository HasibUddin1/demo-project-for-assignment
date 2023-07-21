import { BsBag } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";

const Stats = () => {
    return (
        <div className="xl:flex gap-10 mt-10 w-11/12 mx-auto">
            <div className="flex items-center gap-5 bg-white px-10 py-4 rounded-xl xl:w-3/12">
                <div>
                    <BsBag className="text-orange-600 text-4xl"></BsBag>
                </div>
                <div>
                    <p>Total Sales</p>
                    <h2 className="text-2xl font-bold">$2,456</h2>
                </div>
            </div>
            <div className="flex items-center gap-5 bg-white px-10 py-4 rounded-xl xl:w-3/12 mt-5 xl:mt-0">
                <div>
                <AiFillShop className="text-purple-600 text-4xl"></AiFillShop>
                </div>
                <div>
                    <p>Total Expenses</p>
                    <h2 className="text-2xl font-bold">$3,326</h2>
                </div>
            </div>
            <div className="flex items-center gap-5 bg-white px-10 py-4 rounded-xl xl:w-3/12 mt-5 xl:mt-0">
                <div>
                    <FaUsers className="text-green-600 text-4xl"></FaUsers>
                </div>
                <div>
                    <p>Total Visitors</p>
                    <h2 className="text-2xl font-bold">5,325</h2>
                </div>
            </div>
            <div className="flex items-center gap-5 bg-white px-10 py-4 rounded-xl xl:w-3/12 mt-5 xl:mt-0">
                <div>
                    <BiMenuAltLeft className="text-orange-600 text-4xl"></BiMenuAltLeft>
                </div>
                <div>
                    <p>Total Orders</p>
                    <h2 className="text-2xl font-bold">1,326</h2>
                </div>
            </div>
        </div>
    );
};

export default Stats;