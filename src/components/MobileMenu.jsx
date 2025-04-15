import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './navConfig';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const menuRef = useRef(null);
  
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
  
  // Add animation and click outside detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Close menu"]') && 
          !event.target.closest('button[aria-label="Open menu"]')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <>
      {/* Semi-transparent backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 right-0 z-40 bg-white shadow-lg md:hidden overflow-hidden 
                   ${isOpen ? 'animate-slideDown' : 'animate-slideUp'}`}
        style={{ maxHeight: 'calc(100vh - 64px)' }}
      >
        <nav className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <ul className="divide-y divide-gray-100">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`block px-6 py-4 text-base nav-link ${location.pathname === link.path 
                    ? 'nav-link-active' 
                    : ''} hover:bg-gray-50`}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;