function NavbarLink({ to, name }: { to: string; name: string }) {
  return (
    <a
      href={to}
      className="rounded-sm px-3 py-2 hover:bg-blue-200 hover:bg-opacity-40 hover:font-extrabold "
    >
      {name}
    </a>
  )
}

export default function Navbar() {
  return (
    <div className="flex gap-x-4 text-lg font-bold tracking-tight text-white">
      <NavbarLink to="/" name="Home" />
      <NavbarLink to="/my-teams" name="Meus times" />
    </div>
  )
}
