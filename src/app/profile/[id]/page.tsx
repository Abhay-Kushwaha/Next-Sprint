import React from 'react'

export default function UserProfile({params}:any){
  return (
    <div>
          <h1 className="text-4xl font-bold text-center mb-8">Profile Page</h1>
            <p className="text-center text-lg">Welcome, {params.id}!</p>
    </div>
  )
}