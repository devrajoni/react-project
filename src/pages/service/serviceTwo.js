import About from "../../section/service/serviceTwo/about";
import Banner from "../../section/service/serviceTwo/banner";
import Footer from "../../section/service/serviceTwo/footer";
import Inquiry from "../../section/service/serviceTwo/inquiry";
import Services from "../../section/service/serviceTwo/service";
import Work from "../../section/service/serviceTwo/work";

export default function ServiceTwo() {
  return (
    <>
      <div>
        <Banner />
        <Services />
        <Work />
        <About />
        {/* <Skill /> */}
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
