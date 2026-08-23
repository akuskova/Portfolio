import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative inline-block transition
   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sunset
   after:transition-all after:duration-300
   ${isActive
     ? "text-sunset font-bold cursor-default"
     : "text-moonlight hover:text-sunset after:w-0 hover:after:w-full"}`;

const projectsLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative inline-block transition
   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sunset
   after:transition-all after:duration-300
   ${isActive
     ? "text-sunset font-bold"
     : "text-moonlight hover:text-sunset after:w-0 hover:after:w-full"}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
   <nav className="fixed top-0 w-full flex items-center justify-between px-4 md:px-8 py-4 bg-stormy text-moonlight border-b border-storm-light z-50">
      <Link to="/" className="font-bold text-xl">Anna Kuskova</Link>

      <div className="hidden md:flex gap-8">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>

        <div className="relative group">
          <NavLink to="/projects" className={projectsLinkClass}>Projects</NavLink>
          <div className= "absolute left-0 pt-2 w-40 bg-black/60 rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <Link to="/projects/browzen" className="block px-4 py-2 text-moonlight hover:bg-stormy hover:text-sunset first:rounded-t-md transition">Browzen</Link>
            <Link to="/projects/starvest" className="block px-4 py-2 text-moonlight hover:bg-stormy hover:text-sunset transition">Starvest</Link>
            <Link to="/projects/dha" className="block px-4 py-2 text-moonlight hover:bg-stormy hover:text-sunset transition">DHA</Link>
            <Link to="/projects/search-engine" className="block px-4 py-2 text-moonlight hover:bg-stormy hover:text-sunset last:rounded-b-md transition">Search Engine</Link>
          </div>
        </div>

        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        <NavLink to="/api" className={navLinkClass}>API</NavLink>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-moonlight"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown menu — appears below the navbar when three lines are tapped */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-evening border-b border-storm-light flex flex-col p-4 gap-3">
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

