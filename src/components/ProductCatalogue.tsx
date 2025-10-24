import { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCatalogue() {
  const [searchTerm, setSearchTerm] = useState('');

  // Define folder structure with actual products from public/assets
  const folderStructure = [
    {
      name: 'DINO MOUTH',  // This is DINO MOUTH directory
      products: [
        { id: 'deno_mouth_1', name: 'DINO MOUTH 1', image: 'deno_mouth/DSF0053-scaled.jpg' },
        { id: 'deno_mouth_2', name: 'DINO MOUTH 2', image: 'deno_mouth/DSF0054-1-1-scaled.jpg' },
        { id: 'deno_mouth_3', name: 'DINO MOUTH 3', image: 'deno_mouth/DSF0055-1-scaled.jpg' },
      ]
    },
    {
      name: 'DING DONG',
      products: [
        { id: 'ding_dong_1', name: 'Ding Dong 1', image: 'DING DONG/DSF4020-scaled.jpg' },
        { id: 'ding_dong_2', name: 'Ding Dong 2', image: 'DING DONG/DSF4050-scaled.jpg' },
        { id: 'ding_dong_3', name: 'Ding Dong 3', image: 'DING DONG/DSF4052-scaled.jpg' },
      ]
    },
    {
      name: 'DINO CANDYGUN',
      products: [
        { id: 'dino_candygun_1', name: 'Dino Candygun 1', image: 'DINO CANDYGUN/DSF6597-scaled.jpg' },
        { id: 'dino_candygun_2', name: 'Dino Candygun 2', image: 'DINO CANDYGUN/DSF6601-scaled.jpg' },
        { id: 'dino_candygun_3', name: 'Dino Candygun 3', image: 'DINO CANDYGUN/DSF6606-scaled.jpg' },
      ]
    },
    {
      name: 'GRAB POP TUBE',
      products: [
        { id: 'grab_pop_tube_1', name: 'GRAB POP TUBE 1', image: 'GRAB POP TUBE TOY-01/DSF4168-scaled.jpg' },
        { id: 'grab_pop_tube_2', name: 'GRAB POP TUBE 2', image: 'GRAB POP TUBE TOY-01/DSF4178-scaled.jpg' },
        { id: 'grab_pop_tube_3', name: 'GRAB POP TUBE 3', image: 'GRAB POP TUBE TOY-01/HMP01141-scaled.jpg' },
        { id: 'grab_pop_tube_4', name: 'GRAB POP TUBE 4', image: 'GRAB POP TUBE TOY-01/HMP01151-scaled.jpg' },
        { id: 'grab_pop_tube_5', name: 'GRAB POP TUBE 5', image: 'GRAB POP TUBE TOY-01/HMP01156-scaled.jpg' },
        { id: 'grab_pop_tube_6', name: 'GRAB POP TUBE 6', image: 'GRAB POP TUBE TOY-01/HMP01159-scaled.jpg' },
      ]
    },
    {
      name: 'LIGHTNING KING COBRA',
      products: [
        { id: 'lightning_king_cobra_1', name: 'Lightning King Cobra 1', image: 'LIGHTNING KING COBRA/DSF0060-scaled.jpg' },
        { id: 'lightning_king_cobra_2', name: 'Lightning King Cobra 2', image: 'LIGHTNING KING COBRA/DSF0066-scaled.jpg' },
        { id: 'lightning_king_cobra_3', name: 'Lightning King Cobra 3', image: 'LIGHTNING KING COBRA/DSF0072-scaled.jpg' },
      ]
    },
    {
      name: 'MINI VIPER TOY',
      products: [
        { id: 'mini_viper_toy_1', name: 'Mini Viper Toy 1', image: 'MINI VIPER TOY/DSF4001-scaled.jpg' },
        { id: 'mini_viper_toy_2', name: 'Mini Viper Toy 2', image: 'MINI VIPER TOY/DSF4013-scaled.jpg' },
        { id: 'mini_viper_toy_3', name: 'Mini Viper Toy 3', image: 'MINI VIPER TOY/DSF4017-scaled.jpg' },
      ]
    },
    {
      name: 'LOLLIPOP DISPLAY STAND',
      products: [
        { id: 'stands_1', name: 'LOLLIPOP DISPLAY STAND 1', image: 'stands/ALLIGATOR-TRANSFORMER-scaled.jpg' },
        { id: 'stands_2', name: 'LOLLIPOP DISPLAY STAND 2', image: 'stands/DSF0662-scaled.jpg' },
      ]
    }
  ];

  // Create a set of image filenames from the folder structure to avoid duplicates
  const folderImageFiles = new Set();
  folderStructure.forEach(folder => {
    folder.products.forEach(product => {
      const filename = product.image.split('/').pop();
      if (filename) {
        folderImageFiles.add(filename);
      }
    });
  });

  // Individual product files from public/assets (excluding those in folder sections)
  const individualProducts = [
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
      name: 'Dino Caudipteryx',
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
      name: 'DIY Irritator',
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
    // Additional individual products from assets folder (excluding those in folder sections)
    { id: 13, name: 'FIDGET-SENSORY-TOYS', category: 'Individual Products', image: 'FIDGET-SENSORY-TOYS-scaled.jpg' },
    { id: 14, name: 'FINGER-FLYING', category: 'Individual Products', image: 'FINGER-FLYING--scaled.jpg' },
    { id: 15, name: 'FLYING-DINOSAUR', category: 'Individual Products', image: 'FLYING-DINOSAUR-scaled.jpg' },
    { id: 16, name: 'FLYING-BAT', category: 'Individual Products', image: 'FYLING-BAT--scaled.jpg' },
    { id: 17, name: 'HEN-FIGHT-GAME', category: 'Individual Products', image: 'HEN-FIGHT-GAME--scaled.jpg' },
    { id: 18, name: 'JAGUAR-BIKE', category: 'Individual Products', image: 'JAGUAR-BIKE--scaled.jpg' },
    { id: 19, name: 'LEGO-CAR', category: 'Individual Products', image: 'LEGO-CAR--scaled.jpg' },
    { id: 20, name: 'LEGO-SPINNER', category: 'Individual Products', image: 'LEGO-SPINNER-scaled.jpg' },
    { id: 21, name: 'LION-RACER-BIKE', category: 'Individual Products', image: 'LION-RACER-BIKE--scaled.jpg' },
    { id: 22, name: 'puzzle-ball', category: 'Individual Products', image: 'puzzle-ball--scaled.jpg' },
    { id: 23, name: 'RING-PLATE-SPINNER', category: 'Individual Products', image: 'RING-PLATE-SPINNER-scaled.jpg' },
    { id: 24, name: 'ROBOTIC-ANIMALS', category: 'Individual Products', image: 'ROBOTIC-ANIMALS--scaled.jpg' },
    { id: 25, name: 'SPINNING-BLOW-TOY', category: 'Individual Products', image: 'SPINNING-BLOW-TOY-scaled.jpg' },
    { id: 26, name: 'SPRING-ANIMAL', category: 'Individual Products', image: 'SPRING-ANIMAL--scaled.jpg' },
    { id: 27, name: 'TENNIS-GAME', category: 'Individual Products', image: 'TENNIS-GAME-scaled.jpg' },
    { id: 28, name: 'traffic_light', category: 'Individual Products', image: 'traffic_light.jpg' },
    { id: 29, name: 'TUMBLING-CLOWN', category: 'Individual Products', image: 'TUMBLING-CLOWN--scaled.jpg' },
    { id: 30, name: 'robo_badge', category: 'Individual Products', image: 'robo_badge.jpg' },
  ].filter(product => !folderImageFiles.has(product.image));

  const allProducts = individualProducts;

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                placeholder="Search by name or category..."
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
                      src={`/assets/${product.image}`}
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

      {/* Folder Sections */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          
          
          {folderStructure.map((folder) => (
            <div key={folder.name} className="mb-12">
              <h3 className="text-4xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2 text-center">{folder.name}</h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {folder.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col w-full max-w-xs"
                    >
                      <div className="aspect-square bg-gradient-to-br from-purple-50 to-gray-50 flex items-center justify-center flex-grow">
                        <ImageWithFallback
                          src={`/assets/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-gray-900 mb-2">{product.name}</h3>
                        <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Need a Custom Order?</h2>
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