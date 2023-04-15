import Banner from "../../section/service/serviceOne/banner";
import Services from "../../section/service/serviceOne/service";
import Space from "../../section/service/serviceOne/space";
import Work from "../../section/service/serviceOne/work";
import Skill from "../../section/service/serviceOne/skill";
import Inquiry from "../../section/service/serviceOne/inquiry";
import ServiceFooter from "../../section/service/serviceOne/footer";

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
