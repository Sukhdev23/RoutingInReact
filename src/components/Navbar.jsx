import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">MyApp</div>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
