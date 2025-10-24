import { Shield, CheckCircle, Award, Download } from 'lucide-react';

export function Licenses() {
  const certifications = [
    'BIS Certification for Toys',
    'FSSAI License for Food Products',
    'CE Marking Compliance',
    'EN71 Toy Safety Standards',
    'ASTM Safety Standards',
    'CPSIA Compliance',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8a2be2] to-[#6a1bb2] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-105">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-white mb-4">Licenses & Certifications</h1>
          <p className="text-purple-100 max-w-2xl mx-auto">
            We maintain all necessary certifications to ensure quality and compliance
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-105">
                <Award className="text-[#8a2be2]" size={32} />
              </div>
              <h2 className="text-gray-900 mb-4">Safety & Quality Certifications</h2>
              <p className="text-gray-600">
                We adhere to international safety standards and maintain certifications that guarantee product quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#8a2be2]/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg border border-gray-200">
            <h3 className="text-gray-900 mb-6">Our Commitment to Compliance</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Infytoys, we take product safety very seriously. All our candy toy products meet or exceed international safety standards for both toys and food products.
              </p>
              <p>
                We maintain certifications to ensure continuous compliance with evolving regulations. Our quality assurance team conducts regular audits and inspections to maintain the highest standards.
              </p>
              <p>
                Every product we trade comes with proper documentation and certifications, giving our partners and customers complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Download className="mx-auto text-[#8a2be2] mb-4 transition-transform hover:scale-110" size={48} />
            <h3 className="text-gray-900 mb-4">Need Official Documents?</h3>
            <p className="text-gray-600 mb-8">
              For official copies of our certifications, please contact us
            </p>
            <button className="px-8 py-3 bg-[#8a2be2] text-white rounded-lg hover:bg-[#6a1bb2] transition-all duration-300 hover:shadow-lg hover:scale-105">
              Request Documents
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}