import { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCatalogue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mini Toys', 'Candy Packs', 'Surprise Boxes', 'Collectibles', 'Novelty Items'];

  const products = [
    {
      id: 1,
      name: 'Rainbow Surprise Collection',
      category: 'Surprise Boxes',
      description: 'Assorted toys with premium candy selection',
      sku: 'CT-SB-001',
    },
    {
      id: 2,
      name: 'Mini Racer Series',
      category: 'Mini Toys',
      description: 'Die-cast toy vehicles with fruit candies',
      sku: 'CT-MT-045',
    },
    {
      id: 3,
      name: 'Sweet Adventure Pack',
      category: 'Candy Packs',
      description: 'Adventure-themed candy with collectible figures',
      sku: 'CT-CP-023',
    },
    {
      id: 4,
      name: 'Animal Kingdom Set',
      category: 'Collectibles',
      description: 'Wildlife toy collection with gummy treats',
      sku: 'CT-CL-012',
    },
    {
      id: 5,
      name: 'Crystal Magic Box',
      category: 'Surprise Boxes',
      description: 'Magical themed box with assorted candies',
      sku: 'CT-SB-008',
    },
    {
      id: 6,
      name: 'Hero Squad Mini Pack',
      category: 'Mini Toys',
      description: 'Action figure minis with candy surprises',
      sku: 'CT-MT-067',
    },
    {
      id: 7,
      name: 'Tropical Burst Combo',
      category: 'Candy Packs',
      description: 'Tropical flavored candies with beach toys',
      sku: 'CT-CP-034',
    },
    {
      id: 8,
      name: 'Space Explorer Series',
      category: 'Collectibles',
      description: 'Space-themed collectibles with candy',
      sku: 'CT-CL-019',
    },
    {
      id: 9,
      name: 'Princess Dream Collection',
      category: 'Novelty Items',
      description: 'Princess accessories with sweet treats',
      sku: 'CT-NV-005',
    },
    {
      id: 10,
      name: 'Dinosaur Discovery Pack',
      category: 'Collectibles',
      description: 'Educational dinosaur toys with candies',
      sku: 'CT-CL-027',
    },
    {
      id: 11,
      name: 'Sports Champions Set',
      category: 'Mini Toys',
      description: 'Mini sports equipment with candy',
      sku: 'CT-MT-089',
    },
    {
      id: 12,
      name: 'Ocean Friends Bundle',
      category: 'Surprise Boxes',
      description: 'Marine life toys with assorted candies',
      sku: 'CT-SB-015',
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
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
                      src="https://images.unsplash.com/photo-1596572934492-c9f36de67874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGd1bW15JTIwY2FuZGllc3xlbnwxfHx8fDE3NjA0NzI0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={product.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        {product.category}
                      </span>
                      <span className="text-xs text-gray-500">{product.sku}</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
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
