import { Link } from 'react-router-dom';
import DayNavigation from '../components/DayNavigation';

const Day4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <DayNavigation currentDay={4} />
        <h1 className="text-4xl font-bold mb-8">Day 4</h1>
        <img src="/coral.jpeg" alt="Coral" className="w-full h-64 object-cover mb-8" />
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        <Link to="/day5" className="text-blue-600 hover:underline ml-4">Next Day</Link>
      </div>
    </div>
  );
};

export default Day4; 