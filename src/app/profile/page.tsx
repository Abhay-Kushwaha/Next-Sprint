"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type UserData = {
  _id: string;
  username: string;
  email: string;
  isVarified?: boolean;
  isAdmin?: boolean;
};

export default function UserProfile({ params }: any) {

  const router = useRouter();
  const logout = async () => {
    try {
      axios.get('/api/users/logout')
      toast.success("Logout successful!");
      router.push('/login');
    }
    catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  }

  const [data, setData] = useState<UserData | null>(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get('/api/users/user');
        console.log("User data fetched successfully:", response.data);
        setData(response.data.data);
      }
      catch (error: any) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data.");
      }
    }
    getUserData();
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='flex justify-between items-center mx-10'>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mt-5">
          Next Sprint
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 mb-0 mt-5 rounded-md hover:bg-red-700 transition-colors cursor-pointer" >Logout</button>
      </div>
      <hr className="my-6 border-gray-700 w-full" />
      <h1 className="text-4xl font-bold text-center mb-8">Profile Page</h1>
      <p className="text-lg text-center">Welcome, Sir!</p>
      <div className='bg-green-100 text-black mx-20 mt-10 p-5 rounded-lg shadow-lg'>
        {data ? (
          <h2>
            <u>User ID:</u>     {data._id}<br />
            <u>Username:</u> {data.username}<br />
            <u>Email:</u> {data.email}<br />
            <u>isVarified:</u> {`${data.isVarified}`}<br />
            <u>isAdmin:</u> {`${data.isAdmin}`}<br />
          </h2>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}