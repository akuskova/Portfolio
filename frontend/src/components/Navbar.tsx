import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur text-white z-50">
      <span className="font-bold text-xl">Anna Kuskova</span>

      <div className="flex gap-8">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>

        <div className="relative group">
          <Link to="/projects" className="hover:underline">Projects</Link>
          <div className="absolute left-0 mt-2 w-40 bg-black/80 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to="/projects/browzen" className="block px-4 py-2 hover:bg-gray-700">Browzen</Link>
            <Link to="/projects/starvest" className="block px-4 py-2 hover:bg-gray-700">Starvest</Link>
            <Link to="/projects/dha" className="block px-4 py-2 hover:bg-gray-700">DHA</Link>
            <Link to="/projects/search-engine" className="block px-4 py-2 hover:bg-gray-700">Search Engine</Link>
          </div>
        </div>

        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/api" className="hover:underline">API</Link>
      </div>
    </nav>
  )
}