import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mission from './pages/Mission';

function App() {
  return (
    // <div className="App">
    //   <Home/>
    //   {/* <Navbar/> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/our_mission" index element={<Mission/>} />
      </Routes>
    </Router>
  );
}

export default App;
