import AddNewPost from "./AddNewPost/AddNewPost";
import Stats from "./Stats/Stats";
import TableSection from "./TableSection/TableSection";


const Home = () => {
    return (
        <div className="bg-slate-200">
            <AddNewPost></AddNewPost>
            <Stats></Stats>
            <TableSection></TableSection>
        </div>
    );
};

export default Home;