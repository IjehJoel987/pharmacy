'use client';
import React, { useState } from 'react';

// Simple SVG icons to replace lucide-react
const SearchIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const StarIcon = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// Fake product data - EASILY REPLACEABLE when you get the Excel sheet
const PRODUCTS = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    description: "Effective pain relief and fever reducer"
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
    description: "Broad spectrum antibiotic capsules"
  },
  {
    id: 3,
    name: "Vitamin C Tablets",
    category: "Vitamins",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=300&h=300&fit=crop",
    description: "Immune system support supplement"
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    category: "Medical Devices",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
    description: "Digital automatic blood pressure monitor"
  },
  {
    id: 5,
    name: "Insulin Glargine",
    category: "Diabetes Care",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop",
    description: "Long-acting insulin injection"
  },
  {
    id: 6,
    name: "Cough Syrup",
    category: "Cold & Flu",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
    description: "Effective cough suppressant syrup"
  },
  {
    id: 7,
    name: "Hand Sanitizer",
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=300&h=300&fit=crop",
    description: "70% alcohol hand sanitizer gel"
  },
  {
    id: 8,
    name: "Thermometer Digital",
    category: "Medical Devices",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
    description: "Fast and accurate digital thermometer"
  },
  {
    id: 9,
    name: "Omega-3 Fish Oil",
    category: "Vitamins",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=300&h=300&fit=crop",
    description: "Heart health supplement capsules"
  },
  {
    id: 10,
    name: "Bandages Assorted",
    category: "First Aid",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
    description: "Sterile adhesive bandages variety pack"
  },
  {
    id: 11,
    name: "Aspirin 75mg",
    category: "Pain Relief",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    description: "Low dose aspirin for heart protection"
  },
  {
    id: 12,
    name: "Eye Drops",
    category: "Eye Care",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
    description: "Lubricating eye drops for dry eyes"
  }
];

const CATEGORIES = ["All", "Pain Relief", "Antibiotics", "Vitamins", "Medical Devices", "Diabetes Care", "Cold & Flu", "Personal Care", "First Aid", "Eye Care"];

export default function JoelPharmacy() {
  const [currentSection, setCurrentSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Filter products
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // WhatsApp checkout
  const handleCheckout = () => {
    const cartItems = cart.map(item => `• ${item.name} (Qty: ${item.quantity})`).join('\n');
    const message = `Hi! I would like to order the following items:\n\n${cartItems}\n\nPlease let me know the total cost and availability. Thank you!`;
    const whatsappUrl = `https://wa.me/2349130622391?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // WhatsApp for special requests
  const handleSpecialRequest = () => {
    const message = "Hi! I'm looking for a medication that I couldn't find on your website. Could you please help me with availability and pricing? Thank you!";
    const whatsappUrl = `https://wa.me/2349130622391?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              {/* Space for logo - you can replace this */}
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Joel Pharmacy</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentSection('home')}
              className={`${currentSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} pb-2 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentSection('products')}
              className={`${currentSection === 'products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} pb-2 transition-colors`}
            >
              Products
            </button>
            <button 
              onClick={() => setCurrentSection('about')}
              className={`${currentSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} pb-2 transition-colors`}
            >
              About Us
            </button>
          </div>

          {/* Cart */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCartIcon />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );

  // Home Section
  const HomeSection = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
            <p className="text-xl mb-8 text-blue-100">Quality medications and healthcare products delivered with care</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentSection('products')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Products
              </button>
              <button 
                onClick={handleSpecialRequest}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Special Requests
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Joel Pharmacy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">All medications are sourced from licensed distributors and stored properly</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Ordering</h3>
              <p className="text-gray-600">Browse, select, and order directly through WhatsApp for personalized service</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-600">Fast response time for inquiries and special medication requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Use Our Website</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h4 className="font-semibold mb-2">Browse Products</h4>
              <p className="text-gray-600 text-sm">Search or browse through our extensive catalog</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h4 className="font-semibold mb-2">Add to Cart</h4>
              <p className="text-gray-600 text-sm">Select items you need and add them to your cart</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h4 className="font-semibold mb-2">Checkout</h4>
              <p className="text-gray-600 text-sm">Click checkout to send your order via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h4 className="font-semibold mb-2">Get Pricing</h4>
              <p className="text-gray-600 text-sm">Receive current pricing and complete your order</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Request Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Something Not Listed Here?</h3>
          <p className="mb-6 text-green-100">We have access to a wide range of medications. Contact us for special requests!</p>
          <button 
            onClick={handleSpecialRequest}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us for Special Requests
          </button>
        </div>
      </div>
    </div>
  );

  // Products Section
  const ProductsSection = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for medications, supplements, or medical devices..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-xs text-blue-600 font-semibold mb-1">{product.category}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-800">₦****</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <PlusIcon />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No products found matching your search.</p>
          <button 
            onClick={handleSpecialRequest}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Request This Product
          </button>
        </div>
      )}

      {/* Special Request Banner */}
      <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl text-center">
        <h3 className="text-lg font-semibold mb-2">Can't find what you're looking for?</h3>
        <p className="mb-4 text-green-100">We might have it in stock or can order it for you.</p>
        <button 
          onClick={handleSpecialRequest}
          className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );

  // About Section
  const AboutSection = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Joel Pharmacy</h1>
        <p className="text-xl text-gray-600">Your trusted healthcare partner</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At Joel Pharmacy, we are dedicated to providing high-quality healthcare products and medications 
          to our community. We believe that everyone deserves access to affordable, genuine medications 
          and professional pharmaceutical care.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Wide range of prescription and over-the-counter medications</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Health supplements and vitamins</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Medical devices and equipment</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Personal care and hygiene products</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Professional pharmaceutical consultation</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">All our products are sourced from licensed distributors and manufacturers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Professional Service</h3>
            <p className="text-gray-600">Our qualified pharmacists are always ready to help with your healthcare needs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">We offer fair and transparent pricing for all our products.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Convenient Ordering</h3>
            <p className="text-gray-600">Easy online browsing with WhatsApp ordering for your convenience.</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">WhatsApp</p>
              <p className="text-gray-600">+234 913 062 2391</p>
            </div>
          </div>
          <button 
            onClick={handleSpecialRequest}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );

  // Cart Sidebar
  const CartSidebar = () => (
    <div className={`fixed inset-0 z-50 ${cartOpen ? '' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity ${cartOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={() => setCartOpen(false)}
      ></div>
      
      {/* Cart */}
      <div className={`absolute right-0 top-0 h-full w-96 max-w-full bg-white shadow-xl transform transition-transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button 
              onClick={() => setCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto text-gray-400 mb-4">
                  <ShoppingCartIcon />
                </div>
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">₦****</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <MinusIcon />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <PlusIcon />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          <div style={{width: '16px', height: '16px'}}>
                            <XIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  Total: Contact us for pricing
                </p>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon />
                <span>Checkout via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {currentSection === 'home' && <HomeSection />}
      {currentSection === 'products' && <ProductsSection />}
      {currentSection === 'about' && <AboutSection />}
      
      <CartSidebar />

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="flex justify-around py-2">
          <button 
            onClick={() => setCurrentSection('home')}
            className={`flex flex-col items-center py-2 px-4 ${currentSection === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <div className="text-xs">Home</div>
          </button>
          <button 
            onClick={() => setCurrentSection('products')}
            className={`flex flex-col items-center py-2 px-4 ${currentSection === 'products' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <div className="text-xs">Products</div>
          </button>
          <button 
            onClick={() => setCurrentSection('about')}
            className={`flex flex-col items-center py-2 px-4 ${currentSection === 'about' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <div className="text-xs">About</div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <h3 className="text-xl font-bold">Joel Pharmacy</h3>
              </div>
              <p className="text-gray-400">
                Your trusted healthcare partner, providing quality medications and professional service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentSection('home')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => setCurrentSection('products')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </button>
                <button 
                  onClick={() => setCurrentSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={handleSpecialRequest}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Special Requests
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400">
                    <PhoneIcon />
                  </div>
                  <span className="text-gray-400">+234 913 062 2391</span>
                </div>
                <button 
                  onClick={handleSpecialRequest}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Joel Pharmacy. All rights reserved. | Professional healthcare services
            </p>
          </div>
        </div>
      </footer>
      
      {/* Add bottom padding for mobile navigation */}
      <div className="md:hidden h-16"></div>
    </div>
  );
} 