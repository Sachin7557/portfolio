import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/90 shadow-xl backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold text-blue-500 cursor-pointer"
        >
          Sachin<span className="text-white">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden rounded-lg bg-white/5 p-2 text-3xl text-white transition hover:bg-white/10"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-slate-900 transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}>
        <ul className="flex flex-col gap-4 px-6 pb-5 pt-2 text-gray-300">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 transition hover:bg-slate-800 hover:text-blue-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}