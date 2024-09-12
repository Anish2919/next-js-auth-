"use client"; 

import React, {  ChangeEvent, useState } from 'react'
import Link from 'next/link';

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "", 
    username: "", 
    password: ""
  })

  const onSignUp = async(e) => {
    e.preventDefault(); 
  } 

  const handleOnInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user,[e.target.name] : e.target.value})
  }

  return (
    <div className="w-full bg-slate-100 flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={onSignUp}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder='username'
              onChange={handleOnInputValueChange}
              value={user.username}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder='exmple@gmail.com'
              value={user.email}
              onChange={handleOnInputValueChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder='password'
              value={user.password}
              onChange={handleOnInputValueChange}
            />
          </div>


          {/* Signup Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Already Signed Up */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage; 