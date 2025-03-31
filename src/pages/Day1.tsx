import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DayNavigation from '../components/DayNavigation';

const Day1 = () => {
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
        <DayNavigation currentDay={1} />
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
                Heart Explorers
              </h1>
              <p className="text-xl text-white/90">
                Hey, little explorer! Have you ever wondered how understanding your emotions, discovering your interests, 
                and learning to protect the Earth can make you even more amazing? This is the place to uncover these secrets! 🎉
              </p>
            </div>

            {/* Sezione 1: Environmental Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Understanding Laws and Protection</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Points from Cora:</h3>
                  <ul className="space-y-3">
                    <li>Environmental law protects nature and human well-being from harmful activities</li>
                    <li>Private law resolves conflicts between individuals, businesses, and organizations</li>
                    <li>Both types of law work together to maintain a fair and sustainable society</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sezione 2: The Ocean Courtroom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">The Ocean Courtroom 🏛️</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">The Story: Ocean in Trouble!</h3>
                  <p>A big company threw plastic waste into the ocean. Now, sea turtles are getting sick, and fishermen are losing their jobs! 😢</p>
                </div>

                <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 1: Pick Your Role!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border border-blue-100 p-4">
                    <h4 className="font-semibold mb-2">👨‍⚖️ Court Officials</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>The Judge (1 student)</li>
                      <li>Jury (5-7 students)</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl border border-blue-100 p-4">
                    <h4 className="font-semibold mb-2">👩‍⚖️ Lawyers</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Environmental Lawyers 🌱</li>
                      <li>Company Lawyers 💼</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-4">Step 2: The Trial Process</h3>
                <ol className="list-decimal list-inside space-y-3 bg-white rounded-xl border border-blue-100 p-6">
                  <li>Opening Statements</li>
                  <li>Witness Testimonies</li>
                  <li>Debate Session</li>
                  <li>Jury Deliberation</li>
                  <li>Judge's Final Decision</li>
                </ol>
              </div>
            </motion.div>

            {/* Sezione 3: SDGs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Understanding SDGs 14 & 15 🌏</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">SDG 14: Life Below Water</h3>
                    <p>Keeping oceans and seas clean and safe for all marine life to thrive.</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">SDG 15: Life on Land</h3>
                    <p>Protecting forests, animals, and plants to maintain healthy ecosystems.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-blue-100 p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Group Activity: SDG Detectives 🔍</h3>
                  <p className="mb-4">Work together to discover how SDGs 14 and 15 connect to your daily life!</p>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Example Investigation:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Clue: "What happens when people throw trash in the ocean?"</li>
                      <li>Investigation: Discuss impacts on marine life</li>
                      <li>Action: Develop ways to reduce plastic use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
          <Link to="/day2" className="text-blue-600 hover:underline ml-4">Next Day</Link>
        </div>
      </div>
    </div>
  );
};

export default Day1; 