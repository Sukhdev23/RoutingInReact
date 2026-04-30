import React from 'react'

export default function Contact() {
  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-700">Have questions or feedback? Fill out the form and we'll get back to you.</p>

        <form className="mt-6 grid gap-4">
          <input className="w-full px-4 py-2 border rounded" placeholder="Your name" />
          <input className="w-full px-4 py-2 border rounded" placeholder="Your email" />
          <textarea className="w-full px-4 py-2 border rounded" rows="5" placeholder="Message" />
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
