import { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCatalogue() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Alligator Transformer',
      category: 'Surprise Boxes',
      image: 'ALLIGATOR-TRANSFORMER-scaled.jpg',
    },
    {
      id: 2,
      name: 'Baby Dino Hatching',
      category: 'Mini Toys',
      image: 'BABY-DINO-HATCHING--scaled.jpg',
    },
    {
      id: 3,
      name: 'Beyblade 2in1 Fidget',
      category: 'Candy Packs',
      image: 'BEYBLADE-2IN-1-FIDGET--scaled.jpg',
    },
    {
      id: 4,
      name: 'Big Transformer',
      category: 'Collectibles',
      image: 'BIG-TRANSFORMER--scaled.jpg',
    },
    {
      id: 5,
      name: 'Dino Allosaurus',
      category: 'Surprise Boxes',
      image: 'DINO-ALLOSAURUS-scaled.jpg',
    },
    {
      id: 6,
      name: 'Dino Boomerang',
      category: 'Mini Toys',
      image: 'DINO-BOOMERANG--scaled.jpg',
    },
    {
      id: 7,
      name: 'Dino Caudipteryx Dino',
      category: 'Candy Packs',
      image: 'DINO-CAUDIPTERYX-DINO-scaled.jpg',
    },
    {
      id: 8,
      name: 'Dino Diplodocus',
      category: 'Collectibles',
      image: 'DINO-DIPLODOCUS-scaled.jpg',
    },
    {
      id: 9,
      name: 'Dino Edmontonia',
      category: 'Novelty Items',
      image: 'DINO-EDMONTONIA-scaled.jpg',
    },
    {
      id: 10,
      name: 'DIY Irritator Dino',
      category: 'Collectibles',
      image: 'DIY IRRITATOR DINO.jpg',
    },
    {
      id: 11,
      name: 'DIY Minion',
      category: 'Mini Toys',
      image: 'DIY MINION.jpg',
    },
    {
      id: 12,
      name: 'DIY Cat',
      category: 'Surprise Boxes',
      image: 'diy-cat--scaled.jpg',
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center mb-4 animate-in fade-in zoom-in duration-700">Product Catalogue</h1>
          <p className="text-center text-purple-100 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Browse our extensive collection of premium candy toys
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all duration-300"
              />
            </div>


          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-gray-50 flex items-center justify-center">
                    <ImageWithFallback
                      src={`/picture/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{product.name}</h3>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-gray-900 mb-4">Need a Custom Order?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our sales team for bulk orders, custom packaging, or specific product requirements
          </p>
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Contact Sales Team
          </button>
        </div>
      </section>
    </div>
  );
}