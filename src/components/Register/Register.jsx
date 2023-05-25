import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import loginImg from '../../assets/730_generated.jpg'
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = { firstName, lastName };
        const email = form.email.value;
        const phone = form.phone.value;
        const dob = form.dob.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        if(firstName === '' || lastName === '' || email === '' || photoURL === '' || phone === '' || dob === '' || password === ''){
            setError('Please Fill up Empty Field');
            return;
        }
        const newUserInfo = {
            name,
            email,
            phone,
            dob,
            photoURL,
            password
        }


        register(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserData(newUser, firstName, photoURL);
                navigate(from, { replace: true });

                Swal.fire({
                    title: 'Welcome!',
                    text: 'Registration successful',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  })
            })
            .catch(error => {
                const errorMessage = error.message;
                const myError = errorMessage.slice(22);
                setError(myError.slice(0, -2).toUpperCase());
                console.log(error);
            })
    }
    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const updateUserData = (newUser, firstName, photoURL) => {
        updateProfile(newUser, {
            displayName: firstName,
            photoURL: photoURL,
        })
            .then(() => {
                console.log('User name updated')
            })
            .catch(error => {
                console.log(error);
            })
    }

    
    const handleOnChange = () =>{
        setError('');
    }

    return (

        <div>
            <NavBar></NavBar>

            {/* Login Page Code */}
            <div className="sm:w-10/12 my-7 sm:p-5 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">

                {/* Left Side Info*/}
                <div className="w-full flex flex-col items-center justify-center text-center md:text-left mb-5 md:mb-0">
                    <div className="flex w-full justify-center md:justify-start">
                        <img src={loginImg} className="max-h-[250px]" alt="" />
                    </div>
                    <p className="text-lg text-gray-500 w-11/12">Toy wonderland awaits! Dive into a world of imagination. Log in now for exclusive deals, interactive games, and endless fun. Join us today!</p>
                </div>

                {/* Right Side Login From */}
                <div className="min-w-[400px] border rounded-lg p-6 py-8 mx-auto">
                    <h1 className="text-2xl text-error mb-3 font-medium">Sign Up</h1>
                    <form onSubmit={handleRegister}>
                        <div className="flex lg:gap-4 flex-col md:flex-row">
                            <input name="firstName" onChange={handleOnChange} className="mb-4 md:mb-0 border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="text" placeholder="First name" />
                            <input name="lastName" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="text" placeholder="Last name" />
                        </div>
                        <div className="my-4">
                            <input name="email" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="text" placeholder="Enter your email" />
                        </div>
                        <div className="flex lg:gap-4 flex-col md:flex-row">
                            <input name="phone" onChange={handleOnChange} className="mb-4 md:mb-0 border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="text" placeholder="Mobile (optional)" />
                            <input name="dob" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="date" />
                        </div>
                        <div className="mt-4 mb-2 border relative">
                            <input name="password" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type={showPass ? 'text' : 'password'} placeholder="Create password" />
                            {
                                showPass ? <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-error top-[15px] right-2"><FaEye size={18} /></div>
                                    : <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-error top-[15px] right-2"><FaEyeSlash size={18} /></div>
                            }
                        </div>
                        <div className="mt-4">
                            <input name="photo" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="text" placeholder="Photo URL (must be http or https)" />
                        </div>
                        <input type="submit" className="mt-5 btn btn-block btn-error text-white text-lg font-normal capitalize" value="Register" />

                            
                        {/* Error Message */}
                        {
                            error && <div className="alert alert-error rounded-md p-1 text-[#d34c4c] bg-[#f1c2c2] mt-1">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{error}</span>
                                </div>
                            </div>
                        }

                        <p className="text-gray-500 text-center font-[300] mt-3 mb-3">also register with-</p>


                        {/* Right side Social Media */}
                        <div className="grid grid-flow-col justify-center space-x-2">
                            <Link onClick={handleGoogleRegister} className="w-[35px] h-[35px] flex items-center justify-center border transition-all  rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaGoogle size={20} />
                            </Link>

                            <Link className="w-[35px] h-[35px] flex items-center justify-center border transition-all  rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaGithub size={20} />
                            </Link>

                            <Link className="w-[35px] h-[35px] flex items-center justify-center transition-all border rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaFacebookF size={20} />
                            </Link>
                        </div>
                    </form>

                    <p className="mt-3 text-center text-gray-500">Already have account ? <Link to='/login' className="underline btn-link">Login</Link></p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;