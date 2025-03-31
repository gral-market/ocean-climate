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
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white"
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
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Cora; 