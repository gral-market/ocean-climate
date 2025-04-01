import { motion } from 'framer-motion';

const Cora = () => {
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
                Ask Cora
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Your AI companion in the fight against ocean pollution
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Cora is an advanced AI assistant specifically designed to help you understand and combat ocean pollution. 
                With extensive knowledge of marine ecosystems, environmental science, and conservation strategies, 
                Cora can provide detailed insights, answer your questions, and guide you through practical steps 
                to protect our oceans. Whether you're a student, researcher, or simply passionate about marine conservation, 
                Cora is here to support your journey.
              </p>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white mb-16"
            >
              <p className="text-xl mb-6">
                Ready to start your conversation with Cora? Call now:
              </p>
              <a 
                href="tel:01118487716" 
                className="text-5xl font-bold text-blue-400 hover:text-blue-300 transition-colors bg-black/30 px-8 py-4 rounded-xl inline-block"
              >
                011 1848 7716
              </a>
              <p className="mt-4 text-white/70">
                Available 24/7 to assist you with your questions about ocean conservation
              </p>
            </motion.div>

            {/* About Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              
              {/* Team Members Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/donya.JPG" alt="Donya" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Donya</h3>
                  <p className="text-gray-300 text-center">"Growing up in coastal Iran, I witnessed firsthand the impact of climate change on our local fishing communities. This experience drives my passion for ocean conservation."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/placeholder-profile.jpg" alt="Mohammed" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Mohammed</h3>
                  <p className="text-gray-300 text-center">"The Red Sea has been my home and inspiration. Its coral reefs taught me the delicate balance of marine ecosystems and the urgent need to protect them."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/placeholder-profile.jpg" alt="Karim" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Karim</h3>
                  <p className="text-gray-300 text-center">"My research in marine biology opened my eyes to the devastating effects of ocean acidification. I'm committed to finding solutions through technology and education."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/alice.JPG" alt="Alice" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Alice</h3>
                  <p className="text-gray-300 text-center">"I grow up in a beautiful island nation, I've always felt a deep connection to the ocean. However, many of the scenic views I once cherished have been destroyed by pollution. I want to protect the ocean so that future generations can experience its beauty the way I did."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/elika.jpeg" alt="Elika" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Elika</h3>
                  <p className="text-gray-300 text-center">"As a child, I felt deeply connected to nature without needing a reason. Today, I believe that anything that gives life and peace, like nature does, should also be given care, respect—and rights."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/luca.JPG" alt="Luca" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Luca</h3>
                  <p className="text-gray-300 text-center">"As a lifelong diver, I've seen the beauty of marine life—and its growing threats. Protecting our oceans is personal to me. With this project, I want to help preserve their biodiversity for future generations."</p>
                </div>

                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <img src="/alberto.JPG" alt="Alberto" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-white text-xl font-semibold text-center mb-2">Alberto</h3>
                  <p className="text-gray-300 text-center">"I grew up in Turin, surrounded not by oceans but by hills, rivers, and the slow rhythm of the seasons. Nature was my first language—the quiet forests in the mountains nearby, the wind brushing through the trees, the silence after snowfall. I didn't need to be told it mattered; I could feel it. Now, I believe that connection comes with responsibility. I want to help protect these fragile ecosystems, so that future generations can feel what I felt: awe, peace, and belonging."</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Cora; 