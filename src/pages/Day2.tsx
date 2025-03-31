import { motion } from 'framer-motion';
import DayNavigation from '../components/DayNavigation';

const Day2 = () => {
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
        <DayNavigation currentDay={2} />
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
                Ocean Guardians
              </h1>
              <p className="text-xl text-white/90">
                Welcome back, brave explorer! Today, we're diving deep into the world of marine conservation. 
                Get ready to discover how we can protect our beautiful oceans! 🌊
              </p>
            </div>

            {/* Sezione Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Understanding Ocean Pollution</h2>
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VtMSWOzz5Q0"
                  title="Ocean Pollution Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-600">
                Let's watch this video to better understand how pollution affects our oceans and marine life.
              </p>
            </motion.div>

            {/* Sezione Leggi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Laws That Protect Oceans 📜</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Plastic Bans</h3>
                  <p className="text-gray-600">Some places have banned plastic bags, straws, and cups.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Recycling Rules</h3>
                  <p className="text-gray-600">Companies must recycle instead of throwing plastic away.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Protected Areas</h3>
                  <p className="text-gray-600">Special zones where fishing and pollution are not allowed.</p>
                </div>
              </div>
            </motion.div>

            {/* Sezione Gioco */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Game Time: Can You Save the Ocean? 🎮</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">How to Play:</h3>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Form teams and get a picture of ocean pollution</li>
                    <li>Analyze the pollution in your picture</li>
                    <li>Answer the challenge questions</li>
                    <li>Present your solutions to the class</li>
                  </ol>
                </div>

                <div className="bg-white rounded-xl border border-blue-100 p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Challenge Questions:</h3>
                  <ul className="space-y-3">
                    <li>🔍 What kinds of pollution do you see?</li>
                    <li>🐋 How might this pollution harm animals or people?</li>
                    <li>💡 What could we do to prevent this pollution?</li>
                    <li>📜 Can you think of a new law or rule to stop this kind of pollution?</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sezione Risultati */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Results and Impact 🌟</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-green-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li>Students demonstrated understanding of pollution causes and effects</li>
                    <li>Teams worked together to identify problems and propose solutions</li>
                    <li>Many showed interest in eco-friendly innovations</li>
                    <li>Students felt empowered to take action in their daily lives</li>
                    <li>The combination of education and interactive play fostered responsibility</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Day2; 