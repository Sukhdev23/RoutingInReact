import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function User() {
  const user = useLoaderData()


  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{user.name || user.login}</h1>
          <p className="text-lg text-gray-600 mb-4">@{user.login}</p>
          {user.bio && <p className="text-gray-600 text-center mb-6">{user.bio}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-600">Followers</p>
            <p className="text-2xl font-bold text-blue-600">{user.followers}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-600">Following</p>
            <p className="text-2xl font-bold text-green-600">{user.following}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-gray-600">Public Repos</p>
            <p className="text-2xl font-bold text-purple-600">{user.public_repos}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-gray-600">Public Gists</p>
            <p className="text-2xl font-bold text-orange-600">{user.public_gists}</p>
          </div>
        </div>

        <div className="border-t pt-6">
          {user.location && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Location:</span> {user.location}
            </p>
          )}
          {user.company && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Company:</span> {user.company}
            </p>
          )}
          {user.blog && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Website:</span>{' '}
              <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {user.blog}
              </a>
            </p>
          )}
          {user.email && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          )}
          {user.twitter_username && (
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Twitter:</span> @{user.twitter_username}
            </p>
          )}
        </div>

        <div className="mt-8">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            View Profile on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
