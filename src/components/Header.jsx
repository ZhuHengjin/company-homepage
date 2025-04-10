import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { navLinks } from './navConfig';

const Header = ({ setIsMobileMenuOpen }) => {
  const location = useLocation();
  
  return (
    <header 
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
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;