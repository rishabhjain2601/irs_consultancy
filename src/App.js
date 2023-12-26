import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mission from './pages/Mission';
import WhyChooseUs from './pages/WhyChooseUs';
import OurClients from './pages/OurClients';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App bg-gradient-to-br from-[#c1d1f6] to-[#fae5e5] overflow-clip">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/our_mission" index element={<Mission />} />
          <Route path="/why_choose_us" index element={<WhyChooseUs/>} />
          <Route path="/our_clients" index element={<OurClients/>} />
          <Route path="/contact_us" index element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
