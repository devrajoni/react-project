import Banner from "../../section/contact/banner";
import Card from "../../section/contact/card";
import Footer from "../../section/contact/footer";
import Inquiry from "../../section/contact/inquiry";
import Map from "../../section/contact/map";
import Message from "../../section/contact/message";

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
