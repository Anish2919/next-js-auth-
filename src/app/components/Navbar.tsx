const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 bg-transparent">
      {/* Left section: Logo and links */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          Logo
        </a>
        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
        </div>
      </div>

      {/* Right section: Sign In and Sign Up buttons */}
      <div className="space-x-4">
        <a
          href="#"
          className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md"
        >
          Sign In
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          Sign Up
        </a>
      </div>
    </nav>
  )
}

export default Navbar