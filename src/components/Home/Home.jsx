import AddNewPost from "./AddNewPost/AddNewPost";
import FormSectionWithFlags from "./FormSectionWithFlags/FormSectionWithFlags";
import Stats from "./Stats/Stats";
import TableSection from "./TableSection/TableSection";


const Home = () => {
    return (
        <div className="bg-slate-200">
            <AddNewPost></AddNewPost>
            <Stats></Stats>
            <TableSection></TableSection>
            <FormSectionWithFlags></FormSectionWithFlags>
        </div>
    );
};

export default Home;