import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WhyChooseUs from './pages/WhyChooseUs';
import ContactUs from './pages/ContactUs';
import SkillsWeHire from './pages/SkillsWeHire';
import WaysOfWorking from './pages/WaysOfWorking';

function App() {
  return (
    <div className="App bg-gradient-to-br from-[#c1d1f6] to-[#fae5e5] overflow-clip">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/skills_we_hire" index element={<SkillsWeHire/>} />
          <Route path="/ways_of_working" index element={<WaysOfWorking/>} />
          <Route path="/why_choose_us" index element={<WhyChooseUs/>} />
          <Route path="/contact_us" index element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
