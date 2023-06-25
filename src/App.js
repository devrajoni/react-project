import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import HomeTwo from "./pages/home/home_two";
// import Service from  './pages/service/serviceOne';
import { createContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "./asset/gif.gif";
import { BASE_URL } from "./data/baseUrl";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import SingleProject from "./pages/service/serviceThree";
import Service from "./pages/service/serviceTwo";
import SingleWork from "./pages/work/single-work";
import Work from "./pages/work/work";

export const DataContext = createContext();

function App() {
  const [setting, setSetting] = useState({});
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const URL = `${BASE_URL}/setting`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setSetting(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  if (isloading) {
    return (
      <p className="text-white h-full flex justify-center item-center" id="">
        <LazyLoadImage src={Loader} alt="image1" className="h-full" />
      </p>
    );
  }

  return (
    <DataContext.Provider value={[setting, setSetting]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeTwo />} />
        {/* <Route path="/service" element={<Service />} /> */}
        <Route path="/service" element={<Service />} />
        <Route
          path="/service/:id"
          element={<SingleProject />}
          isloading={setIsLoading}
        />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<SingleWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
