import { motion } from 'framer-motion';
import DayNavigation from '../components/DayNavigation';

const Day3 = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="/days.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <DayNavigation currentDay={3} />
        <section className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Intestazione */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Marine Life Defenders
              </h1>
              <p className="text-xl text-white/90">
                Welcome to Day 3 of our ocean adventure! Today we'll learn about the amazing creatures 
                that live in our oceans and how we can protect them. Are you ready to dive in? 🐋
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">What is Recycling? 🔄</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Recycling is the process of transforming waste materials into new products.
                  This helps reduce pollution and preserves natural resources.
                </p>
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Did you know...</h3>
                  <ul className="space-y-3">
                    <li>🧴 Plastic bottles can be turned into new bottles or clothes</li>
                    <li>🥤 Aluminum cans can be recycled infinitely without losing quality</li>
                    <li>📦 Recycled cardboard saves millions of trees every year</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Most Harmful Materials 🚫</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">Plastics</h3>
                  <p className="text-gray-600">
                    Takes hundreds of years to decompose and forms harmful microplastics that endanger animals.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">Chemical Waste</h3>
                  <p className="text-gray-600">
                    Factory chemicals dumped in rivers poison marine life and damage ecosystems.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">Ghost Nets</h3>
                  <p className="text-gray-600">
                    Abandoned fishing nets trap dolphins, turtles, and fish in the ocean.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Upcycling Project 🎨</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Required Materials:</h3>
                  <ul className="space-y-2">
                    <li>🧴 Plastic bottles</li>
                    <li>📰 Old newspapers or magazines</li>
                    <li>🫙 Glass jars</li>
                    <li>📦 Cardboard boxes</li>
                    <li>🧸 Broken toys or electronics</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Step-by-Step Instructions:</h3>
                    <ol className="list-decimal list-inside space-y-4">
                      <li>Collect materials from home or school</li>
                      <li>Brainstorm what you could create</li>
                      <li>Transform materials into something useful</li>
                      <li>Present your creation to the class</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Creative Ideas:</h3>
                    <ul className="space-y-3">
                      <li>🌱 Plant pots from plastic bottles</li>
                      <li>👜 Tote bags from old t-shirts</li>
                      <li>✏️ Pencil holders from tin cans</li>
                      <li>🎵 Wind chimes from bottle caps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Day3; 