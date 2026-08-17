export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur text-white z-50">
      <span className="font-bold text-xl">Anna Kuskova</span>

      <div className="flex gap-8">
        <a href="about" className="hover:underline">About</a>
        <a href="projects" className="hover:underline">Projects</a>
        <a href="contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}