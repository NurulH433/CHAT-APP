
function Login() {
  return (
    <div className="flex items-center flex-col justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
            <h1 className="text-3l font-semibold text-center text-gray-300">
                Login
                <span className="text-blue-500"> ChatApp</span>
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

                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className="btn btn-sm btn-block mt-2">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
