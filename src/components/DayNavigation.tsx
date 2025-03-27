import { Link } from 'react-router-dom';

interface DayNavigationProps {
  currentDay: number;
}

const DayNavigation = ({ currentDay }: DayNavigationProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link
        to={currentDay > 1 ? `/day${currentDay - 1}` : '/'}
        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        {currentDay === 1 ? 'Back to Home' : 'Previous Day'}
      </Link>
      {currentDay < 5 && (
        <Link
          to={`/day${currentDay + 1}`}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Next Day
        </Link>
      )}
    </div>
  );
};

export default DayNavigation; 