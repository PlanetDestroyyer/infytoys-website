import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { ProductCatalogue } from './components/ProductCatalogue';
import { Licenses } from './components/Licenses';
import { Contact } from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={setCurrentPage} />;
      case 'ABOUT US':
        return <About />;
      case 'PRODUCT CATALOGUE':
        return <ProductCatalogue />;
      case 'LICENSES':
        return <Licenses />;
      case 'CONTACT US':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}