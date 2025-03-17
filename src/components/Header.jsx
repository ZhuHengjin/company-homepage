import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiOutlineSearch } from 'react-icons/hi';

const Header = ({ scrolled, setIsMobileMenuOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header 
      className={"fixed top-0 z-50 bg-white w-full"}
    >
      <div className="flex items-center justify-between m-5">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold">UtilityMax</span>
        </Link>
          
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiMenu className="w-6 h6" />
        </button>
      </div>
    </header>
  );
};

export default Header;