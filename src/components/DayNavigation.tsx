import { Link } from 'react-router-dom';

interface DayNavigationProps {
  currentDay: number;
}

const DayNavigation = ({ currentDay }: DayNavigationProps) => {
  const hasNextDay = currentDay < 5;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-black/60 transition-all flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </Link>

        {hasNextDay && (
          <Link 
            to={`/day${currentDay + 1}`}
            className="bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-black/60 transition-all flex items-center space-x-2"
          >
            <span>Next Day</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DayNavigation; 