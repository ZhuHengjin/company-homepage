import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

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
  
  const mainLinks = [
    { name: '关于我们', path: '/about' },
    { name: '产品分销', path: '/products' },
    { name: '资源中心', path: '/resources' },
    { name: '社会责任', path: '/responsibility' },
    { name: '联系我们', path: '/contact' },
  ];
  
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white shadow-xl overflow-auto"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-4 flex justify-end">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
            
            <div className="px-6 py-4">
              {/* Removed search input */}
              {/* <div className="mb-8">
                <input
                  type="text"
                  placeholder="搜索..."
                  className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div> */}
              
              {/* Main Navigation */}
              <div className="mb-8">
                <ul className="space-y-6 text-lg">
                  {mainLinks.map((link) => (
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;