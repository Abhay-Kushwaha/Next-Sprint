"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async () => {
        try {
            axios.post("/api/users/verifyemail", { token })
            setVerified(true)
        }
        catch {
            setError(true)
            console.error(error)
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split('=')[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail()
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Verify Your Email</h1>

                <h2 className="text-sm text-gray-500 mb-4">
                    {token ? (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md font-mono text-xs">{token}</span>
                    ) : (
                        "No Token Found"
                    )}
                </h2>

                {verified && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-green-600 mb-2">✅ Email Successfully Verified!</h2>
                        <Link href="/login" className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                            Go to Login
                        </Link>
                    </div>
                )}

                {error && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-red-600">❌ Verification Failed</h2>
                    </div>
                )}
            </div>
        </div>
    );
      
}