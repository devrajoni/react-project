import Banner from "../../section/service/serviceOne/banner";
import Services from "../../section/service/serviceOne/service";
import Space from "../../section/service/serviceOne/space";
import About from "../../section/service/serviceTwo/about";
import Footer from "../../section/service/serviceTwo/footer";
import Inquiry from "../../section/service/serviceTwo/inquiry";
import Work from "../../section/service/serviceTwo/work";

export default function ServiceTwo() {
  return (
    <>
      <div>
        <Banner />
        <Services />
        <Space />
        <Work />
        <Space />
        <About />
        {/* <Skill /> */}
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
