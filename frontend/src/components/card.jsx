import { Input, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";


export const Cards = () => {
    
    return (
            <div className="space-y-4 w-[280px]">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <MdOutlineMailOutline className="w-5 h-5" />
                    </span>
                    <Input
                        type="text"
                        placeholder="Enter Your Email"
                        className="pl-10 pr-3 py-2 w-full h-[41px] border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-white"
                    />
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <MdLockOutline className="w-5 h-5" />
                    </span>
                    <Input
                        type="password"
                        placeholder="Enter Your Password"
                        className="pl-10 pr-3 py-2 w-full h-[41px] border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-white"
                    />
                </div>
                <div className="text-right mt-1">
                    <Link to="/forgot-password"  className="text-sm text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg w-[202px] h-[53px]">
                        Sign In
                    </Button>
                </div>
                <Typography className="text-center mt-4 text-white">
                    {"Don't Have An Account?"} <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </Typography>
            </div>
    );
};