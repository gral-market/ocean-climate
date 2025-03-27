import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/poll.gif"
          alt="Ocean Pollution Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-blue-700/40 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="container py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-20">
              <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-8 drop-shadow-lg">
                Voices for Nature: Ocean Climate Project
              </h1>
              <p className="text-xl text-white mb-12 drop-shadow-lg font-semibold">
                A 5-day journey exploring how we can protect the planet and give nature a voice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {/* Day 1 Card */}
              <Link to="/day1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Day 1</h3>
                  <p className="text-white font-medium drop-shadow-lg">Explore your emotions and discover how they connect to nature.</p>
                </motion.div>
              </Link>

              {/* Day 2 Card */}
              <Link to="/day2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Day 2</h3>
                  <p className="text-white font-medium drop-shadow-lg">Our Responsibility: Learning to protect our oceans</p>
                </motion.div>
              </Link>

              {/* Day 3 Card */}
              <Link to="/day3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Day 3</h3>
                  <p className="text-white font-medium drop-shadow-lg">Recycling Heroes: Making sustainable choices</p>
                </motion.div>
              </Link>

              {/* Day 4 Card */}
              <Link to="/day4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Day 4</h3>
                  <p className="text-white font-medium drop-shadow-lg">Nature's Rights: Understanding environmental justice</p>
                </motion.div>
              </Link>

              {/* Day 5 Card */}
              <Link to="/day5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Day 5</h3>
                  <p className="text-white font-medium drop-shadow-lg">Final Project: Taking action for our planet</p>
                </motion.div>
              </Link>

              {/* Ask Cora Card */}
              <Link to="/cora">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-black/60 transition-all shadow-xl h-full min-h-[160px]"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Ask Cora</h3>
                  <p className="text-white font-medium drop-shadow-lg">Chat with our AI ocean guardian</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

const DayCard = ({ day, title, description, image, color }: { 
  day: string; 
  title: string; 
  description: string; 
  image: string;
  color: string;
}) => {
  const bgColors = {
    blue: 'bg-blue-50 border-blue-100',
    teal: 'bg-teal-50 border-teal-100',
    cyan: 'bg-cyan-50 border-cyan-100',
    indigo: 'bg-indigo-50 border-indigo-100',
    purple: 'bg-purple-50 border-purple-100'
  };

  const textColors = {
    blue: 'text-blue-600',
    teal: 'text-teal-600',
    cyan: 'text-cyan-600',
    indigo: 'text-indigo-600',
    purple: 'text-purple-600'
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg border ${bgColors[color as keyof typeof bgColors]}`}
    >
      <div className={`aspect-[4/3] p-8 ${bgColors[color as keyof typeof bgColors]}`}>
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className={`text-sm font-semibold ${textColors[color as keyof typeof textColors]}`}>Day {day}</span>
          <span className="text-gray-300">•</span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/day${day}`}
          className={`inline-flex items-center space-x-2 ${textColors[color as keyof typeof textColors]} font-medium hover:opacity-80`}
        >
          Start Learning
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home; 