import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  )
}
