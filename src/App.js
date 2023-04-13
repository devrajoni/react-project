import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from  './pages/home/home';
import Service from  './pages/service/serviceOne';
import ServiceTwo from  './pages/service/serviceTwo';
import SingleProject from  './pages/service/serviceThree';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-two" element={<ServiceTwo />} />
        <Route path="/single-project" element={<SingleProject />} />
      </Routes>
    </div>
  );
}

export default App;
