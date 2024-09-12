import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="w-full h-[80vh] bg-slate-50 flex justify-center items-center">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md h-fit">
            <div className="flex justify-center mb-6">
            {/* <img src="https://via.placeholder.com/100" alt="Login Icon" className="w-20 h-20"> */}
            <h1 className="text-2xl font-semibold">Login Page</h1>
            </div>
            <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required placeholder="email address"/> 
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required placeholder="enter password" /> 
            </div>

            <div className="mb-4">
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Login</button>
            </div>
            </form>

            <p className="text-center text-sm text-gray-600">
                Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up</Link>
            </p>
        </div>
    </div>
  )
}

export default LoginPage
