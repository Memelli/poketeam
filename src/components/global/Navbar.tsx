export default function Navbar() {
  return (
    <div className="flex gap-x-4 text-lg font-bold tracking-tight text-white">
      <a href="/" className="hover:font-extrabold hover:underline">
        Home
      </a>
      <a href="/my-teams/" className="hover:font-extrabold hover:underline">
        Meus Times
      </a>
    </div>
  )
}
