import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white w-full fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        ElevateU
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link to="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
        {isAuthenticated && (
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
        )}
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex space-x-4">
        {!isAuthenticated ? (
          <button
            className="px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-md font-medium bg-red-500 text-white hover:bg-red-600 transition"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log Out
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="text-gray-600 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-500 shadow-md flex flex-col items-center space-y-4 p-4 md:hidden">
          <Link to="/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/courses" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
          )}
          {!isAuthenticated ? (
            <button
              className="px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => { loginWithRedirect(); setIsMenuOpen(false); }}
            >
              Login
            </button>
          ) : (
            <button
              className="px-4 py-2 rounded-md font-medium bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }); setIsMenuOpen(false); }}
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;