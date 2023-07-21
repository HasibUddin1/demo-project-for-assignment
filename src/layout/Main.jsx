import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="flex">
                <div className="w-1/6">
                    <NavigationBar></NavigationBar>
                </div>
                <div className="w-5/6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;