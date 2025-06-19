'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    }
    else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response);
      alert("User Logged in Successfully");
      toast.success("Login Success");
      router.push("/profile");
    }
    catch (error: any) {
      alert("Invalid Credentials.");
      console.error("Login Failed:", error);
      toast.error("Invalid Credentials, please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-xl rounded-xl px-8 py-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Login to Account</h1>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
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
            onClick={onLogin}
            className={`font-semibold py-3 rounded-md shadow-md transition-colors duration-300
                            ${buttonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 cursor-pointer text-white"}
                      `}
          >
            {buttonDisabled ? "No Login" : "Login"}
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