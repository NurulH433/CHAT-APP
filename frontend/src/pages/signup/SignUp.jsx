import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hook/useSignup.js';

function SignUp() {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        await signup(inputs);
    }

    return (
        <div className='flex flex-col justify-center items-center max-w-96 mx-auto'>
            <div className='w-full p-6 bg-gray-400 rounded-lg bg-clip-padding opacity-[0.8] glasses backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Signup <span className='text-blue-600'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter username" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckbox 
                        selectedGender={inputs.gender} 
                        onCheckboxChange={handleCheckboxChange} 

                    />

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </Link>

                    <div>
                        <button 
                            className="btn btn-sm btn-block mt-2 border border-slate-700 bg-blue-600 text-white"
                             disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
