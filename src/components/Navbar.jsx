import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-noen bg-violet-200 p-4 font-edu-hand text-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Glamour Grove</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/stylists" className="hover:text-white">Stylists</Link>
          <Link to="/gallery" className="hover:text-white">Gallery</Link>
          <Link to="/book-appointment" className="hover:text-white">Book Appointment</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      <div className={`md:hidden fixed inset-0 bg-pink-600/60 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="flex flex-col items-center mt-12">
          <button onClick={toggleMenu} className="self-end p-4">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
          <Link to="/" className="text-white text-lg py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="text-white text-lg py-2" onClick={toggleMenu}>Services</Link>
          <Link to="/stylists" className="text-white text-lg py-2" onClick={toggleMenu}>Stylists</Link>
          <Link to="/gallery" className="text-white text-lg py-2" onClick={toggleMenu}>Gallery</Link>
          <Link to="/book-appointment" className="text-white text-lg py-2" onClick={toggleMenu}>Book Appointment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
