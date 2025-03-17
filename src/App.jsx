import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import ResponsibilityPage from './pages/ResponsibilityPage';
import ContactPage from './pages/ContactPage';
import { LoginPage, NotFoundPage } from './pages/PlaceholderPages';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Fixed header at top */}
        <Header 
          scrolled={scrolled} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          className="fixed top-0 left-0 right-0 h-16 bg-white z-50"
        />
        {/* Fixed navbar on left beneath header */}
        <Navbar 
          scrolled={scrolled} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          className="fixed top-16 left-0 w-48 bg-gray-200 h-[calc(100vh-4rem)] p-4"
        />
        {/* Content area offset by header height and navbar width */}
        <div className="md:ml-48 pt-12 flex flex-col min-h-screen">
          <main className="flex-grow p-5 md:p-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/responsibility" element={<ResponsibilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer className="p-4" />
        </div>
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;