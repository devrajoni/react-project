import Banner from "../../section/service/serviceOne/banner";
import ServiceFooter from "../../section/service/serviceOne/footer";
import Inquiry from "../../section/service/serviceOne/inquiry";
import Services from "../../section/service/serviceOne/service";
import Skill from "../../section/service/serviceOne/skill";
import Space from "../../section/service/serviceOne/space";
import Work from "../../section/service/serviceOne/work";

export default function ServiceOne() {
  return (
    <>
      <div>
        <Banner />
        <Services />
        <Space />
        <Work />
        <Skill />
        <Inquiry />
        <ServiceFooter />
      </div>
    </>
  );
}
