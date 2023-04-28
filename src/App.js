import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from  './pages/home/home';
import HomeTwo from  './pages/home/home_two';
import Service from  './pages/service/serviceOne';
import ServiceTwo from  './pages/service/serviceTwo';
import SingleProject from  './pages/service/serviceThree';
import Work from  './pages/work/work';
import About from  './pages/about/about';
import Blog from  './pages/blog/blog';
import Contact from  './pages/contact/contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeTwo />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-two" element={<ServiceTwo />} />
        <Route path="/single-project" element={<SingleProject />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
