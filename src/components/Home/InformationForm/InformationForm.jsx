

const InformationForm = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <div className="w-4/6 bg-white rounded-xl px-10 py-10">
                <h1 className="text-2xl font-bold">Available Services</h1>
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
            <div>

            </div>
        </div>
    );
};

export default InformationForm;