import Banner from "../../section/service/serviceThree/banner";
import Feature from "../../section/service/serviceThree/feature";
import Image from "../../section/service/serviceThree/image";
import Space from "../../section/service/serviceThree/space";
import Activity from "../../section/service/serviceThree/activity";
import Similar from "../../section/service/serviceThree/similar";
import Inquiry from "../../section/service/serviceThree/inquiry";
import Footer from "../../section/service/serviceThree/footer";

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