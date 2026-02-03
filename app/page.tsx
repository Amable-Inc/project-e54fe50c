'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-3xl">🐵</span>
              <span className="ml-2 text-2xl font-bold text-amber-900">MonkeyMart</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition">Home</a>
              <a href="#monkeys" className="text-gray-700 hover:text-amber-600 transition">Our Monkeys</a>
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                Find Your Perfect
                <span className="block text-orange-600">Primate Companion</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover ethically sourced, hand-raised monkeys ready to bring joy and adventure to your life. 
                Each monkey comes with full certification and lifetime support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition transform hover:scale-105">
                  Browse Monkeys
                </button>
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition">
                <div className="text-9xl text-center">🐒</div>
                <p className="text-white text-center mt-4 text-xl font-semibold">Premium Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">Why Choose MonkeyMart?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're committed to providing the best monkey ownership experience with premium care and support
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Health Certified</h3>
              <p className="text-gray-700">
                All our monkeys are health-checked, vaccinated, and come with comprehensive medical records.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Well-Trained</h3>
              <p className="text-gray-700">
                Each monkey receives socialization and basic training before joining your family.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Lifetime Support</h3>
              <p className="text-gray-700">
                Get 24/7 access to our expert care team and comprehensive owner resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Monkeys Section */}
      <section id="monkeys" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">Featured Monkeys</h2>
          <p className="text-center text-gray-600 mb-12">Meet some of our adorable companions waiting for their forever homes</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Coco', type: 'Capuchin', age: '2 years', price: '$8,500', emoji: '🐵' },
              { name: 'Mango', type: 'Marmoset', age: '1 year', price: '$4,500', emoji: '🐒' },
              { name: 'Banjo', type: 'Spider Monkey', age: '3 years', price: '$12,000', emoji: '🦧' },
            ].map((monkey, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition">
                <div className="bg-gradient-to-br from-amber-300 to-orange-400 h-48 flex items-center justify-center text-8xl">
                  {monkey.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{monkey.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700"><span className="font-semibold">Type:</span> {monkey.type}</p>
                    <p className="text-gray-700"><span className="font-semibold">Age:</span> {monkey.age}</p>
                    <p className="text-2xl font-bold text-orange-600">{monkey.price}</p>
                  </div>
                  <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Happy Families</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-amber-100">Health Guaranteed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Expert Support</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📬</div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for new arrivals, care tips, and special offers!
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-amber-300 focus:outline-none focus:border-amber-600 transition"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl">🐵</span>
                <span className="ml-2 text-xl font-bold">MonkeyMart</span>
              </div>
              <p className="text-amber-200">
                Your trusted source for ethical monkey companions since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Monkeys</a></li>
                <li><a href="#" className="hover:text-white transition">Care Guide</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-amber-200">
                <li>📞 1-800-MONKEYS</li>
                <li>📧 info@monkeymart.com</li>
                <li>📍 123 Jungle Ave, Primate City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-700 pt-8 text-center text-amber-200">
            <p>&copy; 2024 MonkeyMart. All rights reserved. 🐒</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
