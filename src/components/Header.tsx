import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full z-50">
      <nav className="bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-white font-bold text-xl">
              Voices for Nature
            </Link>
            <div className="flex space-x-4">
              <Link to="/day1" className="text-white hover:text-blue-200">Day 1</Link>
              <Link to="/day2" className="text-white hover:text-blue-200">Day 2</Link>
              <Link to="/day3" className="text-white hover:text-blue-200">Day 3</Link>
              <Link to="/day4" className="text-white hover:text-blue-200">Day 4</Link>
              <Link to="/day5" className="text-white hover:text-blue-200">Day 5</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 