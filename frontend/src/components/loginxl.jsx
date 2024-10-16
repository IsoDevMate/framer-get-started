import smallMoonImage from '../assets/small_moon.png'; 
import logoImage from '../assets/l5-removebg-preview ff 2.png';
import largeMoonImage from '../assets/large_moon.png';
import '../assets/css/landing.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline, MdLockOutline } from 'react-icons/md';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export const LoginXL = () => {

    const handleForgotPassword = () => {
        // Handle forgot password logic
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className="landing-screen large-screen-only">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center">
             <motion.div
                className="absolute top-1/4 right-1/4 transform -translate-y-1/2 translate-x-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <img src={logoImage} alt="Stream Lunar Logo" className="w-80" />
            </motion.div>

            <img src={smallMoonImage} alt="Small Moon" className="small-moon" />
            <img src={largeMoonImage} alt="Large Moon" className="large-moon" />

            
            <motion.div
                className="absolute top-1/4 left-52 transform -translate-x-1/2 -translate-y-1/2 "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                <Card color="transparent" shadow={false} className="p-10 rounded-lg w-[400px] h-[450px] bg-[#D9D9D9]">
                    <Typography variant="h2" color="black" className="flex mb-4 text-center justify-center  font-inter font-bold text-[32px] ">
                        Sign In
                    </Typography>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
                        <div className="space-y-6 w-[300px]">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3  text-black">
                                    <MdOutlineMailOutline className="w-5 h-5" />
                                </span>
                                <Input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="pl-10 pr-3 py-2 w-full h-[41px] border rounded-md border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-black"
                                />
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                    <MdLockOutline className="w-5 h-5" />
                                </span>
                                <Input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="pl-10 pr-3 py-2 w-full h-[41px] border rounded-md border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-black"
                                />
                            </div>
                            <div className="text-right mt-1">
                                <Link to="/forgot-password" onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Button className="bg-black hover:bg-red-700 text-white py-2 rounded-full w-[202px] h-[53px]">
                                    Sign In
                                </Button>
                            </div>
                            <Typography className="text-center mt-4 text-black">
                                {"Don't Have An Account?"} <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                            </Typography>
                        </div>
                    </form>
                </Card>
            </motion.div>
            </div>
            </div>
        </div>
    );
}