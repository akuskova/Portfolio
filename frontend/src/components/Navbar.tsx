import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition ${isActive ? "font-bold cursor-default" : "hover:underline underline-offset-3"}`;
const projectsLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition ${isActive ? "font-bold" : "hover:underline underline-offset-3"}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur text-white z-50">
      <Link to="/" className="font-bold text-xl">Anna Kuskova</Link>

      <div className="hidden md:flex gap-8">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>

        <div className="relative group">
          <NavLink to="/projects" className={projectsLinkClass}>Projects</NavLink>
          <div className= "absolute left-0 pt-2 w-40 bg-black/60 rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <Link to="/projects/browzen" className="block px-4 py-2 hover:bg-gray-700/80">Browzen</Link>
            <Link to="/projects/starvest" className="block px-4 py-2 hover:bg-gray-700/80">Starvest</Link>
            <Link to="/projects/dha" className="block px-4 py-2 hover:bg-gray-700/80">DHA</Link>
            <Link to="/projects/search-engine" className="block px-4 py-2 hover:bg-gray-700/80">Search Engine</Link>
          </div>
        </div>

        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        <NavLink to="/api" className={navLinkClass}>API</NavLink>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown menu — appears below the navbar when three lines are tapped */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur flex flex-col p-4 gap-3">
          <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>Contact</NavLink>
          <NavLink to="/api" onClick={closeMenu} className={navLinkClass}>API</NavLink>
        </div>
      )}
    </nav>
  )
}