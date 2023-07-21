import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="xl:flex">
                <div className="xl:w-1/6">
                    <NavigationBar></NavigationBar>
                </div>
                <div className="xl:w-5/6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;