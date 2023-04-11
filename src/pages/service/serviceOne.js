import Banner from "../../section/service/serviceOne/banner";
import Services from "../../section/service/serviceOne/service";
import Space from "../../section/service/serviceOne/space";
import Work from "../../section/service/serviceOne/work";
import Skill from "../../section/service/serviceOne/skill";
import Inquiry from "../../section/home/inquiry";

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
      </div>
    </>
  );
}
