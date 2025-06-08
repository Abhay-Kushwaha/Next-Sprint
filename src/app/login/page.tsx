'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  });

  const onLogin = async () => {
    // Your login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-xl rounded-xl px-8 py-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Login to Account</h1>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
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
            Login
          </button>

          {/* Link to Sign Up*/}
          <p className="text-center mt-4 text-sm text-white/70">
            Don't have an account?{' '}
            <Link href="/signup" className="text-green-300 hover:underline">
              Go to Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}