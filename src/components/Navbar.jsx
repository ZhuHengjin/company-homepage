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
    <div className="hidden fixed left-0 top-32 p-5 md:block">
      <ul className="flex flex-col space-y-6">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`
                         }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;