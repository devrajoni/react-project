import Activity from "../../section/service/serviceThree/activity";
import Banner from "../../section/service/serviceThree/banner";
import Feature from "../../section/service/serviceThree/feature";
import Footer from "../../section/service/serviceThree/footer";
import Image from "../../section/service/serviceThree/image";
import Inquiry from "../../section/service/serviceThree/inquiry";
import Similar from "../../section/service/serviceThree/similar";
import Space from "../../section/service/serviceThree/space";

export default function ServiceThree() {
  return (
    <>
      <div>
        <Banner />
        <Feature />
        <Image />
        <Space />
        <Activity />
        <Similar />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
