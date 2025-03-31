import { motion } from 'framer-motion';
import DayNavigation from '../components/DayNavigation';

const Day5 = () => {
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
        <DayNavigation currentDay={5} />
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
                Ocean Heroes Summit
              </h1>
              <p className="text-xl text-white/90">
                Welcome to our final day! Today we'll celebrate everything we've learned and 
                make our commitment to being lifelong ocean protectors. Are you ready to become an Ocean Hero? 🌊✨
              </p>
            </div>

            {/* Personal Actions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">My Promise to the Planet 🌱</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Our planet gives us everything we need—clean air, water, food, and a place to live. 
                  We all have the power to make a difference through small daily actions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Daily Actions:</h3>
                    <ul className="space-y-3">
                      <li>♻️ Use reusable bottles and bags</li>
                      <li>💧 Save water while brushing</li>
                      <li>🚫 Avoid single-use plastics</li>
                      <li>📦 Sort waste correctly</li>
                      <li>💡 Turn off unused electronics</li>
                      <li>🌳 Plant trees when possible</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Why It Matters:</h3>
                    <ul className="space-y-3">
                      <li>🌊 Oceans produce half our oxygen</li>
                      <li>🐠 Marine life needs protection</li>
                      <li>🌍 Forests absorb CO₂</li>
                      <li>🦁 Animals need their habitats</li>
                      <li>🌱 Clean air and water depend on us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Plastic-Free Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Month Without Plastic Challenge 🎯</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  A single plastic bottle takes 450 years to decompose! Join our challenge to reduce plastic waste 
                  for a whole month.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Challenge Steps:</h3>
                    <ol className="list-decimal list-inside space-y-3">
                      <li>Keep a "Plastic-Free Journal"</li>
                      <li>Find eco-friendly alternatives</li>
                      <li>Share tips with friends</li>
                      <li>Reflect on your journey</li>
                    </ol>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Alternatives:</h3>
                    <ul className="space-y-3">
                      <li>👜 Cloth bags for shopping</li>
                      <li>🥤 Metal or bamboo straws</li>
                      <li>🫙 Glass containers for storage</li>
                      <li>🍶 Reusable water bottles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Presentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Project Presentation & Celebration 🎉</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Presentation Options:</h3>
                    <ul className="space-y-3">
                      <li>🎨 Creative posters</li>
                      <li>🎥 Short videos</li>
                      <li>🎭 Environmental skits</li>
                      <li>💻 Digital presentations</li>
                    </ul>
                  </div>
                  <div className="bg-rose-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Include in Your Presentation:</h3>
                    <ul className="space-y-3">
                      <li>🎯 Environmental problem focus</li>
                      <li>💡 Proposed solutions</li>
                      <li>📚 Key learnings</li>
                      <li>🤝 Call to action</li>
                    </ul>
                  </div>
                </div>

                {/* Certificate Section */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    🏅 Congratulations on Completing the Program! 🌟
                  </h3>
                  <p className="italic">
                    "Small actions, big impact – Let's make the world a better place!"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Day5; 