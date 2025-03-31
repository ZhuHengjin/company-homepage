import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Header = ({ setIsMobileMenuOpen }) => {
  return (
    <header 
      className="fixed top-0 z-50 bg-white w-full"
    >
      <div className="flex items-center justify-between m-5">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold">UtilityMax</span>
        </Link>
          
        <button 
          className="block md:hidden icon-button" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;