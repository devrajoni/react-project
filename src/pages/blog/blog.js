import Banner from "../../section/blog/banner";
import Footer from "../../section/blog/footer";
import Inquiry from "../../section/blog/inquiry";
import Latest from "../../section/blog/latest";

export default function Blog() {
  return (
    <>
      <div>
        <Banner />
        <Latest />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
