import Banner from "../../section/contact/banner";
import Card from "../../section/contact/card";
import Message from "../../section/contact/message";
import Map from "../../section/contact/map";
import Inquiry from "../../section/contact/inquiry";
import Footer from "../../section/contact/footer";

export default function Contact() {
  return (
    <>
      <div>
          <Banner />
          <Card />
          <Message />
          <Map />
          <Inquiry />
          <Footer />
      </div>
    </>
  );
}
