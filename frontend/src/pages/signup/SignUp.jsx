import React from 'react'

function SignUp() {
  return (
    <div className='flex flex-col justify-center items-center max-w-96 mx-auto'>
        <div className='w-full p-6 bg-gray-400 rounded-lg bg-clip-padding opacity-[0.8] glasses backdrop-blur-lg'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup <span className='text-blue-600'>ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10" />
                </div>

                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    Already have an account?
                </a>

                <div>
                    <button className="btn btn-sm btn-block mt-2 border border-slate-700 bg-blue-600 text-white">Sign Up</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default SignUp
