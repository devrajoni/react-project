import Banner from "../../section/about/banner";
import Card from "../../section/about/card";
import Space from "../../section/about/space";
import Skill from "../../section/about/skill";
import Business from "../../section/about/business";
import Team from "../../section/about/team";
import Inquiry from "../../section/about/inquiry";
import Footer from "../../section/about/footer";

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