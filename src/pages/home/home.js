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

export default function Home() {
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
