import { motion } from 'framer-motion';
import DayNavigation from '../components/DayNavigation';

const Day4 = () => {
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
        <DayNavigation currentDay={4} />
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
                Ocean Innovation Lab
              </h1>
              <p className="text-xl text-white/90">
                Welcome to our Ocean Innovation Lab! Today we'll explore exciting technologies 
                and creative solutions that help protect our oceans. Let's become ocean innovators! 🚀
              </p>
            </div>

            {/* Rights of Nature Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">What Are the Rights of Nature? 🌍</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Rights of Nature is a legal concept that gives natural ecosystems legal rights, similar to 
                  humans or companies. This means nature can be represented in court and defend itself from damage.
                </p>
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Real World Examples:</h3>
                  <ul className="space-y-3">
                    <li>🌊 New Zealand: The Whanganui River became the first river with legal personhood (2017)</li>
                    <li>🗺️ Ecuador: The Constitution recognizes Mother Earth as a legal entity</li>
                    <li>🌳 Colombia: The Amazon Rainforest was declared a legal subject (2018)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Coral Reef Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">The Coral Reef Case 🐠</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <p>
                    Coral reefs are living, breathing ecosystems that provide homes for thousands of marine species 
                    and protect coastlines. However, they face serious threats from pollution, rising temperatures, 
                    and overfishing.
                  </p>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/images/coral-reef.jpg" 
                    alt="Coral Reef Ecosystem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Parliament of Nature Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Parliament of Nature Activity 🏛️</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Groups:</h3>
                    <ul className="space-y-3">
                      <li>🌿 Environmental NGO (Protect Nature!)</li>
                      <li>👔 Government (Balance Policy!)</li>
                      <li>🏭 Industry (Think Economy!)</li>
                      <li>👥 Local Community (Daily Life!)</li>
                      <li>🐠 Nature's Voice (I Am the Reef!)</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Game Steps:</h3>
                    <ol className="list-decimal list-inside space-y-3">
                      <li>Prepare 1-minute speeches</li>
                      <li>Debate for 10-15 minutes</li>
                      <li>Vote on reef's legal rights</li>
                      <li>Discuss results together</li>
                    </ol>
                  </div>
                </div>

                {/* Voting Section */}
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Reflection Questions:</h3>
                  <div className="space-y-3">
                    <p>1. If I were the reef, I would say...</p>
                    <p>2. One thing I learned today is...</p>
                    <p>3. I think nature should/should not have legal rights because...</p>
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

export default Day4; 