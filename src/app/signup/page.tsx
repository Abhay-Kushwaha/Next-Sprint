'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function SignupPage() {
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: ''
    });

    const onSignUp = async () => {
        // Your sign-up logic here
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-xl rounded-xl px-8 py-10 text-white">
                <h1 className="text-4xl font-bold text-center mb-8">Create Account</h1>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSignUp();
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
                        className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-semibold py-3 rounded-md shadow-md cursor-pointer"
                    >
                        Sign Up
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