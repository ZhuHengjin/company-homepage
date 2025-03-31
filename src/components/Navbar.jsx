import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './navConfig';

const Navbar = () => {
  const location = useLocation();
  
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