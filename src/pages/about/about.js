import Banner from "../../section/about/banner";
import Business from "../../section/about/business";
import Card from "../../section/about/card";
import Footer from "../../section/about/footer";
import Inquiry from "../../section/about/inquiry";
import Skill from "../../section/about/skill";
import Space from "../../section/about/space";
import Team from "../../section/about/team";

export default function About() {
  return (
    <>
      <div>
        <Banner />
        <Card />
        <Space />
        <Skill />
        <Business />
        <Team />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
