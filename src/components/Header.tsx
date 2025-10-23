import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/a097ab682fcc1a1ab84b4cbc7ff5932931269785.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'HOME',
    'ABOUT US',
    'PRODUCT CATALOGUE',
    'LICENSES',
    'CONTACT US',
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-transform hover:scale-105 duration-300"
            onClick={() => onNavigate('HOME')}
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="Infytoys Logo" className="h-16 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 mt-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${
                  currentPage === item
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}