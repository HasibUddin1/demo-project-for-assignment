
import { useContext, useState } from 'react';
import loginImage from '../../assets/images/Login/login-image.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Your account has been created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='bg-slate-200 h-screen'>
            <div className='flex items-center h-screen'>
                <div className='flex justify-center items-center bg-white w-fit mx-auto rounded-xl'>
                    <div>
                        <img className='rounded-s-xl' src={loginImage} alt="" />
                    </div>
                    <div className='p-10'>
                        <h2 className='text-3xl font-semibold'>Login</h2>
                        <p className='text-xl'>Donec tortor quam at duis tortor</p>
                        <form onSubmit={handleLogin}>
                            <div className='flex flex-col mt-10'>
                                <label htmlFor="email">E-mail</label>
                                <input className='border-2 rounded py-1 px-2' type="email" name="email" id="email" placeholder='Your Email' />
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label htmlFor="password">Password</label>
                                <input className='border-2 rounded py-1 px-2' type="password" name="password" id="password" placeholder='Your Password' />
                            </div>
                            <div className='w-full text-end mt-2'>
                                <small className='cursor-pointer hover:underline'>Forgot password?</small>
                            </div>
                            <div className='text-center mt-5 mx-auto'>
                                <input className='bg-[#2563EB] text-white py-3 rounded hover:bg-blue-800 ease-in-out duration-200 cursor-pointer w-full' type="submit" value="Login" />
                            </div>
                            <div className='divider mt-5'>Or</div>
                            <div className='mt-5'>
                                <Link to='/register'><button className='btn btn-outline rounded w-full'>Register</button></Link>
                            </div>
                            {error && <p className='text-red-600 text-xl text-center font-bold'>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;