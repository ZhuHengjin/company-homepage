import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiOutlineSearch } from 'react-icons/hi';

const Navbar = ({ scrolled, setIsMobileMenuOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: '关于我们', path: '/about' },
    { name: '产品分销', path: '/products' },
    { name: '资源中心', path: '/resources' },
    { name: '社会责任', path: '/responsibility' },
    { name: '联系我们', path: '/contact' },
  ];
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">UtilityMax</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? 'nav-link-active' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Right Side - Search & Login */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '240px', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="搜索..."
                    className="w-full py-2 pl-3 pr-10 text-sm border-b border-gray-300 focus:outline-none"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                  <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
                    <HiOutlineSearch className="w-5 h-5" />
                  </button>
                </motion.div>
              ) : (
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2"
                >
                  <HiOutlineSearch className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Login Button */}
            <Link to="/login" className="hidden sm:block btn-primary">
              登录
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="block md:hidden p-2" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;