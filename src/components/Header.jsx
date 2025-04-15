import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from './navConfig';
import { forwardRef } from 'react';

const Header = forwardRef(({ setIsMobileMenuOpen, isMobileMenuOpen }, ref) => {
  const location = useLocation();
  
  return (
    <header 
      ref={ref}
      className="fixed top-0 z-50 bg-white w-full shadow-sm"
    >
      <div className="container-custom py-4 flex items-center">
        <Link to="/" className="flex-shrink-0 mr-8">
          <span className="text-xl text-accent-blue font-bold font-serif">UtilityMax</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Empty div to balance the header for better centering */}
        <div className="hidden md:block flex-shrink-0 ml-8"></div>
          
        <button 
          className="block md:hidden icon-button ml-auto" 
          onClick={setIsMobileMenuOpen}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? 
            <HiX className="w-6 h-6" /> : 
            <HiMenu className="w-6 h-6" />
          }
        </button>
      </div>
    </header>
  );
});

export default Header;