import AddNewPost from "./AddNewPost/AddNewPost";
import FormSectionWithFlags from "./FormSectionWithFlags/FormSectionWithFlags";
import InformationForm from "./InformationForm/InformationForm";
import Stats from "./Stats/Stats";
import TableSection from "./TableSection/TableSection";


const Home = () => {
    return (
        <div className="bg-slate-200">
            <AddNewPost></AddNewPost>
            <Stats></Stats>
            <TableSection></TableSection>
            <FormSectionWithFlags></FormSectionWithFlags>
            <InformationForm></InformationForm>
        </div>
    );
};

export default Home;