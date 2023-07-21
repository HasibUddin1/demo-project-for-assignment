import britishFlagIcon from '../../../assets/images/icons/british-flag.jpg'
import turkishFlagIcon from '../../../assets/images/icons/turkish-flag.jpg'

const FormSectionWithFlags = () => {
    return (
        <div className="mt-10 bg-white w-11/12 mx-auto rounded-xl px-10 py-10">
            <h1 className="text-2xl font-bold">Booking</h1>
            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p>
            <div className='mt-5 flex gap-5'>
                <button className='flex items-center gap-1 bg-amber-200 px-2 py-1 rounded border border-amber-600 font-semibold'><img src={britishFlagIcon} alt="" /> English</button>
                <button className='flex items-center gap-1 px-2 py-1 rounded border font-semibold'><img src={turkishFlagIcon} alt="" /> Turkish</button>
            </div>
            {/* Form Section */}
            <form className='mt-5'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className='block border-2 px-2 py-1 rounded w-full' type="text" name="name" id="name" placeholder='Your Name' />
                </div>
                <div className='mt-5 xl:flex gap-5'>
                    <div className='xl:w-1/3 mt-5 xl:mt-0'>
                        <label htmlFor="select">Category</label>
                        <select className='block border-2 px-2 py-1 rounded w-full' name="" id="select">
                            <option value="england">England</option>
                            <option value="australia">Australia</option>
                            <option value="america">America</option>
                        </select>
                    </div>
                    <div className='xl:w-1/3 mt-5 xl:mt-0'>
                        <label htmlFor="preference">Preference</label>
                        <input className='block border-2 px-2 py-1 rounded w-full' type="text" name="" id="preference" placeholder='Your Desired Place' />
                    </div>
                    <div className='xl:w-1/3 mt-5 xl:mt-0'>
                        <label htmlFor="desiredSeat">Desired Seat</label>
                        <input className='block border-2 px-2 py-1 rounded w-full' type="text" name="" id="desiredSeat" placeholder='Your Desired Place' />
                    </div>
                </div>
                <div className='xl:flex gap-5 mt-5'>
                    <div className='xl:w-1/2'>
                        <label htmlFor="desiredCompartment">Desired Compartment</label>
                        <input className='block border-2 px-2 py-1 rounded w-full' type="text" name="" id="desiredCompartment" placeholder='Your Desired Compartment' />
                    </div>
                    <div className='xl:w-1/2 mt-5 xl:mt-0'>
                        <label htmlFor="desiredFlight">Desired Flight</label>
                        <input className='block border-2 px-2 py-1 rounded w-full' type="text" name="" id="desiredFlight" placeholder='Your Desired Flight' />
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="flightDescription">Flight Description</label>
                    <textarea className='block border-2 w-full px-2 py-1 rounded' name="" id="flightDescription" cols="30" rows="7" placeholder='Flight Description'></textarea>
                </div>
            </form>
        </div>
    );
};

export default FormSectionWithFlags;