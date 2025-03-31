import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { navLinks } from './navConfig';

const MobileMenu = ({ isOpen, onClose }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div
        className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white shadow-xl overflow-auto"
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="icon-button"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        
        <div className="px-6 py-4">
          {/* Main Navigation */}
          <div className="mb-8">
            <ul className="space-y-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="nav-link"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>              
        </div>
      </div>
    </>
  );
};

export default MobileMenu;