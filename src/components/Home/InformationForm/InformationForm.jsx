

const InformationForm = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto md:flex gap-10 pb-10">
            <div className="md:w-4/6 bg-white rounded-xl px-10 py-10">
                <h1 className="text-2xl font-bold">Your Information</h1>
                <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p>
                <form className="mt-5">
                    <div>
                        <label htmlFor="userName">Name</label>
                        <input className="block border-2 rounded px-2 py-1 w-full" type="text" name="" id="userName" placeholder="Your Name" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="states">States</label>
                        <select className="block border-2 px-2 py-1 rounded w-full" name="" id="states">
                            <option value="delhi">Delhi</option>
                            <option value="bombay">Bombay</option>
                            <option value="chennai">Chennai</option>
                        </select>
                    </div>
                    <div className="mt-5 flex gap-5">
                        <div className="w-1/2">
                            <label htmlFor="streetAddress1">Street Address 1</label>
                            <input className="block border-2 px-2 py-1 rounded w-full" type="text" name="" id="streetAddress1" placeholder="Street Address 1" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="streetAddress2">Street Address 2</label>
                            <input className="block border-2 px-2 py-1 rounded w-full" type="text" name="" id="streetAddress2" placeholder="Street Address 2" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="addNotes">Add Notes</label>
                        <textarea className="block border-2 px-2 py-1 rounded w-full" name="" id="addNotes" cols="30" rows="7" placeholder="Add Notes"></textarea>
                    </div>
                </form>
            </div>
            <div className="md:w-2/6 bg-white rounded-xl px-10 py-10 mt-5 md:mt-0">
                <h1 className="text-2xl font-bold">Contact Information</h1>
                <form className="mt-5">
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input className="block border-2 px-2 py-1 rounded w-full" type="text" name="" id="phoneNumber" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="socialMedia">Social Media</label>
                        <select className="block border-2 px-2 py-1 rounded w-full" name="" id="socialMedia">
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="twitter">Twitter</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="contactDescription">Contact Description</label>
                        <textarea className="block border-2 px-2 py-1 rounded w-full" name="" id="contactDescription" cols="30" rows="7" placeholder="Contact Description"></textarea>
                    </div>
                    <div className="mt-5">
                        <input className="cursor-pointer bg-blue-600 py-2 w-full rounded-md text-white font-semibold hover:bg-blue-800 ease-in-out duration-200" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InformationForm;