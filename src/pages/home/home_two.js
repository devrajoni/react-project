import Banner from "../../section/home_two/banner";
import About from "../../section/home_two/about";
import Space from "../../section/home/space";
import Service from "../../section/home_two/service";
import Space2 from "../../section/home/space2";
import WhyUs from "../../section/home_two/why_us";
import Work from "../../section/home_two/work";
import Testimonial from "../../section/home_two/testiimonial";
import Team from "../../section/home_two/team";
import Latest from "../../section/home_two/latest";
import Inquiry from "../../section/home_two/inquiry";
import Footer from "../../section/home_two/footer";

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
