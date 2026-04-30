import React from 'react'

export default function Home() {
  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4 text-lg text-gray-700">A simple React + Tailwind scaffold. Use the navbar to navigate — I'll leave routing to you.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700" href="#">Get Started</a>
          <a className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100" href="#">Learn More</a>
        </div>
      </div>
    </section>
  )
}
