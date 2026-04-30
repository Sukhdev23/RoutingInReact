import React from 'react'

export default function About() {
  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">About MyApp</h1>
        <p className="mt-4 text-gray-700">MyApp is a minimal starter template built with React and Tailwind CSS. It's designed to be lightweight and easy to extend.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Fast</h3>
            <p className="text-sm text-gray-600 mt-2">Vite + React provides a fast development experience.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Customizable</h3>
            <p className="text-sm text-gray-600 mt-2">Easily add routes, state management, or UI libraries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
