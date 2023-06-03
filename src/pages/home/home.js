import About from "../../section/home/about";
import Banner from "../../section/home/banner";
import HomeFooter from "../../section/home/homeFooter";
import Inquiry from "../../section/home/inquiry";
import LatestNews from "../../section/home/latestNews";
import Service from "../../section/home/service";
import Space from "../../section/home/space";
import Space2 from "../../section/home/space2";
import Testimonial from "../../section/home/testimonial";
import Work from "../../section/home/work";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { useState } from "react";
// import Loader from "../../asset/gif.gif";

export default function Home() {
  // const [isloading, setIsLoading] = useState(true);
  // if(isloading){
  //   return <div className='h-screen text-white flex justify-center items-cneter'>
  //  <LazyLoadImage src={Loader} />
  //  </div>
  //  }

  return (
    <>
      <div>
        <Banner />
        <Service />
        <Space />
        <Work />
        <Space2 />
        <About />
        <Testimonial />
        <LatestNews />
        <Inquiry />
        <HomeFooter />
      </div>
    </>
  );
}
