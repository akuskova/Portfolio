export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur text-white z-50">
      <span className="font-bold text-xl">Anna Kuskova</span>

      <div className="flex gap-8">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>

        <div className="relative group">
          <a href="/projects" className="hover:underline">Projects</a>
          <div className="absolute left-0 mt-2 w-40 bg-black/80 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="/projects/browzen" className="block px-4 py-2 hover:bg-gray-700">Browzen</a>
            <a href="/projects/starvest" className="block px-4 py-2 hover:bg-gray-700">Starvest</a>
            <a href="/projects/dha" className="block px-4 py-2 hover:bg-gray-700">DHA</a>
            <a href="/projects/search-engine" className="block px-4 py-2 hover:bg-gray-700">Search Engine</a>
          </div>
        </div>

        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}