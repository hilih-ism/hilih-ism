import React from 'react';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h2 className="text-2xl text-bay-leaf font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-primary">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-bay-leaf"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-primary">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-bay-leaf"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-primary">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-bay-leaf"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full py-2 px-4 text-white bg-bay-leaf hover:bg-gumbo rounded-lg font-bold transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
