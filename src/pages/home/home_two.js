import Space from "../../section/home/space";
import Space2 from "../../section/home/space2";
import About from "../../section/home_two/about";
import Banner from "../../section/home_two/banner";
import Footer from "../../section/home_two/footer";
import Inquiry from "../../section/home_two/inquiry";
import Latest from "../../section/home_two/latest";
import Service from "../../section/home_two/service";
import Team from "../../section/home_two/team";
import Testimonial from "../../section/home_two/testiimonial";
import WhyUs from "../../section/home_two/why_us";
import Work from "../../section/home_two/work";

export default function HomeTWO() {
  return (
    <>
      <div>
        <Banner />
        <About />
        <Space />
        <Service />
        <Space2 />
        <WhyUs />
        <Space />
        <Work />
        <Space2 />
        <Testimonial />
        <Team />
        <Space2 />
        <Latest />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
