import { useState, useEffect } from 'react';
import { Package, Shield, Truck, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import carouselImage1 from '../assets/c06a5c3740e502b7ca91433b8b8abc18e09e0ef5.png';
import carouselImage2 from '../assets/5311fd30c8b3a8b5f4e383fd361490aa097aa3ba.png';
import carouselImage3 from '../assets/4656597180285eea0837ec2ac407a2b90c8c166d.png';
import carouselImage4 from '../assets/4bde899e2ce161b6ae21250583db805bf1af0ce8.png';
import carouselImage5 from '../assets/c06a5c3740e502b7ca91433b8b8abc18e09e0ef5.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    carouselImage1, // Kids holding candy toys
    carouselImage2, // "Spreading Smiles" kids with toys
    carouselImage3, // "Promotional Toys!" with colorful toys
    carouselImage4, // Kids with lollipops covering their eyes
    carouselImage5, // Kids holding candy toys in their hands
  ];

  const carouselImages = [
    carouselImage1, // Kids holding candy toys
    carouselImage2, // "Spreading Smiles" kids with toys
    carouselImage3, // "Promotional Toys!" with colorful toys
    carouselImage4, // Kids with lollipops covering their eyes
    carouselImage5, // Kids holding candy toys in their hands
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const features = [
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'Extensive catalog of premium candy toys from trusted manufacturers worldwide',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products meet international safety and quality standards',
    },
    {
      icon: Truck,
      title: 'Reliable Distribution',
      description: 'Efficient logistics network ensuring timely delivery across regions',
    },
    {
      icon: Award,
      title: 'Licensed Products',
      description: 'Fully licensed and certified products with complete documentation',
    },
  ];

  const stats = [
    { value: '500+', label: 'Products' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Locations' },
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-purple-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 animate-in fade-in slide-in-from-bottom duration-500">
                Premium Candy Toys Trader
              </div>
              <h1 className="text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                Your Trusted Partner in Candy Toys Trading
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                Infytoys specializes in trading high-quality candy toys that delight children worldwide. With over 15 years of industry experience, we connect manufacturers with retailers through reliable distribution and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <button
                  onClick={() => onNavigate('PRODUCT CATALOGUE')}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  View Products
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('CONTACT US')}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105 duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* Image Slider */}
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  {heroSlides.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`Happy children with toys ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-purple-600" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="text-purple-600" size={24} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-purple-600 w-6' : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-white text-4xl md:text-5xl font-bold mb-2 animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${index * 100}ms` }}>{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional service and quality products to our partners
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 150}ms`, animationDuration: '700ms' }}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scrolling Carousel Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-gray-900 mb-4">Happy Children, Happy Moments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the joy our candy toys bring to children everywhere
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-left gap-6">
            {[...carouselImages, ...carouselImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Happy children ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-white mb-6 animate-in fade-in zoom-in duration-700">Ready to Partner With Us?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Join hundreds of satisfied clients who trust us for their candy toys trading needs
          </p>
          <button
            onClick={() => onNavigate('CONTACT US')}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-110 duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl animate-in fade-in zoom-in duration-700 delay-200"
          >
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
