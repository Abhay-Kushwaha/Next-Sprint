'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function SignupPage() {
    const router = useRouter();

    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    })

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onSignUp = async () => {
        try {
            const res = await axios.post("api/users/signup", user);
            console.log("Signup Success", res);
            alert("User created successfully");
            toast.success("Signup Success");
            router.push("/login");
        }
        catch (error:any) { 
            alert(error.response.data.error || "Signup failed");
            console.error("Signup Failed:", error);
            toast.error("Something went wrong, please try again later.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-xl rounded-xl px-8 py-10 text-white">
                <h1 className="text-4xl font-bold text-center mb-8">Create Account</h1>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    {/* Username */}
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className="p-3 rounded-md border border-white/20 bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="p-3 rounded-md border border-white/20 bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="p-3 rounded-md border border-white/20 bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={onSignUp}
                        className={`font-semibold py-3 rounded-md shadow-md transition-colors duration-300
                            ${buttonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 cursor-pointer text-white"}
                          `}
                    >
                        {buttonDisabled ? "No SignUp" : "SignUp"}
                    </button>

                    {/* Link to Login */}
                    <p className="text-center mt-4 text-sm text-white/70">
                        Already have an account?{' '}
                        <Link href="/login" className="text-green-300 hover:underline">
                            Go to Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}