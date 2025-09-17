import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-sm:overflow-x-hidden">
      <div
  id="header"
  className="flex justify-between items-center p-5 max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:bg-black max-sm:text-white"
>

        {/* Logo + Mobile Menu Icon */}
        <div className="text-2xl font-extrabold flex justify-between items-center w-full  md:w-auto">
          <h1>KIDDOS</h1>
          <button
            className="md:hidden text-pink-400 z-30"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 mr-10 font-medium">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Teacher">Teacher</Link>
          <Link to="/Maincourse">Courses</Link>
          <Link to="/price">Price</Link>
          <Link to="/mainblog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`fixed top-0 right-0 z-20 h-full bg-slate-800 text-white  shadow-lg transform transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? "w-1/2" : "w-0 overflow-hidden"}`}
      >
        <div className="flex flex-col text-center gap-14 p-6 relative top-20  font-medium">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/teacher">Teacher</Link>
          <Link onClick={() => setIsOpen(false)} to="/Maincourse">Courses</Link>
          <Link onClick={() => setIsOpen(false)} to="/price">Price</Link>
          <Link onClick={() => setIsOpen(false)} to="/mainblog">Blog</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;


