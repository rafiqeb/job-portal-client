import Lottie from "lottie-react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerLottieData from '../assets/lottei/Register.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const Register = () => {
    const { creatUser, setUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)
        creatUser(email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center lg:relative">

            <div className="max-w-lg mx-auto bg-base-200 p-10 shadow-xl rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-6">Register your account</h2>
                <form onSubmit={handleRegister}>
                    <div>
                        <h3 className="text-lg font-semibold">Name:</h3>
                        <input type="text" name="name" placeholder="name"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Email:</h3>
                        <input type="email" name="email" placeholder="email"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Photo:</h3>
                        <input type="text" name="photo" placeholder="photo url"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                    </div>
                    <div className="relative">
                        <h3 className="text-lg font-semibold mt-4">Password:</h3>
                        <input type='password' name="password" placeholder="password"
                            className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        <button type="button"

                            className="btn btn-xs absolute right-2 top-9 text-lg">
                            <FaEye />
                        </button>
                    </div>
                    <div>
                        <input type="submit" value="Register" className="px-4 py-2 rounded-lg w-full bg-blue-700 text-white font-semibold mt-6" />
                    </div>
                    <p className="text-center mt-6">
                        Already have an account? Please <Link className="text-blue-700 font-bold" to='/login'>Login</Link>
                    </p>
                </form>
            </div>
            <div className="w-96 lg:absolute right-80">
                <Lottie animationData={registerLottieData}></Lottie>
            </div>
        </div>
    );
};

export default Register;