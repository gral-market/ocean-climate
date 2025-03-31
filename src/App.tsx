import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Day3 from './pages/Day3';
import Day4 from './pages/Day4';
import Day5 from './pages/Day5';
import Cora from './pages/Cora';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
          <Route path="/day5" element={<Day5 />} />
          <Route path="/cora" element={<Cora />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
