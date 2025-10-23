import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in zoom-in duration-700">
            <h1 className="text-gray-900 mb-6">About Infytoys</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              A trusted leader in candy toys trading with over 15 years of industry expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Infytoys</strong> is a premier candy toys trader dedicated to delivering exceptional products and services to our partners worldwide.
                </p>
                <p>
                  With over 15 years of experience in the industry, we have built a robust network of manufacturers, suppliers, and distributors. Our expertise lies in sourcing high-quality candy toys that meet international safety standards while delighting children with their innovative designs and delicious treats.
                </p>
                <p>
                  We serve retailers, wholesalers, and distributors across multiple regions, providing them with reliable supply chains, competitive pricing, and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 animate-in fade-in slide-in-from-right duration-700">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYwNDcwMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-left duration-700">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-purple-600" size={28} />
              </div>
              <h3 className="text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading candy toys trader that delivers exceptional value to our partners through reliable service, quality products, and innovative solutions. We are committed to maintaining the highest standards in product safety and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-right duration-700">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-purple-600" size={28} />
              </div>
              <h3 className="text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted name in candy toys trading globally, recognized for our commitment to excellence, innovation, and ethical business practices. We envision expanding our reach while maintaining the personal touch that defines our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and relationships with partners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in" style={{ animationDelay: '100ms', animationDuration: '700ms' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain rigorous quality standards and ensure all products meet international safety regulations.
              </p>
            </div>

            <div className="text-center transform hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in" style={{ animationDelay: '200ms', animationDuration: '700ms' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Building lasting relationships through exceptional service, transparency, and reliability.
              </p>
            </div>

            <div className="text-center transform hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in" style={{ animationDelay: '300ms', animationDuration: '700ms' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Conducting business with honesty, ethics, and respect for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-12 text-center animate-in fade-in zoom-in duration-700">Why Partner With Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Extensive product catalog with 500+ items',
                'All products meet international safety standards',
                'Competitive pricing and flexible terms',
                'Reliable distribution network',
                'Complete licensing and documentation',
                'Dedicated customer support team',
                'Fast order processing and delivery',
                'Industry experience spanning 15+ years',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom" style={{ animationDelay: `${index * 50}ms`, animationDuration: '600ms' }}>
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
