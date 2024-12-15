import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottieLogin from '../assets/lottei/Login.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const Login = () => {
    const { signInUser, setUser, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                setUser(result.user)
                // Swal.fire({
                //     title: 'Success!',
                //     text: 'Login successfully',
                //     icon: 'success',
                //     confirmButtonText: 'Ok'
                // })
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // toast.error('This password is incorrect')
                console.log(error.message)
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)   
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center relative">

            <div className="max-w-lg mx-auto bg-base-200 p-10 shadow-xl rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-6">Login your account</h2>
                <form onSubmit={handleLogin}>
                    <button type="button"
                        onClick={handleGoogleLogin}
                        className="px-4 py-2 rounded-lg w-full border border-blue-300 flex justify-center items-center gap-6">
                        <p className="text-2xl"><FcGoogle /></p>
                        <button type="button" className="font-semibold">Login with Google</button>
                    </button>
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Email:</h3>
                        <input type="email" name="email" placeholder="email"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                    </div>
                    <div className="relative">
                        <h3 className="text-lg font-semibold mt-4">Password:</h3>
                        <input type="password" name="password" placeholder="password"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        <p className="text-sm">Forgot Password?</p>
                    </div>
                    <div>
                        <input type="submit" value="Login" className="px-4 py-2 rounded-lg w-full bg-blue-700 text-white font-semibold mt-6" />
                    </div>
                    <p className="text-center mt-6">
                        Dont have an account? <Link className="text-blue-700 font-bold" to='/register'>Register</Link>
                    </p>
                </form>
            </div>
            <div className="w-96 lg:absolute right-60">
                <Lottie animationData={lottieLogin}></Lottie>
            </div>
        </div>
    );
};

export default Login;