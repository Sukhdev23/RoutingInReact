export default async function userLoader({ params }) {
  const { id } = params
  if (!id) {
    throw new Response('Missing username', { status: 400 })
  }

  const res = await fetch(`https://api.github.com/users/${id}`)

  if (!res.ok) {
    throw new Response('User not found', { status: res.status })
  }

  const data = await res.json()
  return data
}
