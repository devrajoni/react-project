import Banner from "../../section/service/serviceOne/banner";
import Services from "../../section/service/serviceOne/service";
import Space from "../../section/service/serviceOne/space";
import Work from "../../section/service/serviceTwo/work";
import About from "../../section/service/serviceTwo/about";
import Skill from "../../section/service/serviceOne/skill";
import Inquiry from "../../section/service/serviceTwo/inquiry";
import Footer from "../../section/service/serviceTwo/footer";

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
        <Skill />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}