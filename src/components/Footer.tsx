import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/a097ab682fcc1a1ab84b4cbc7ff5932931269785.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Infytoys Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading the candy toys trading industry with quality products, reliable service, and commitment to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('LICENSES')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Licenses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('CONTACT US')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">18, Bypass Road, Thiruvur, Ntr District, Andhra Pradesh - 521235</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="flex-shrink-0" size={16} />
                <span className="text-sm">+91 9866513337</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="flex-shrink-0" size={16} />
                <span className="text-sm">infytoys@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Infytoys. All rights reserved.</p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-all transform hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-all transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-all transform hover:scale-110 duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-all transform hover:scale-110 duration-300"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
