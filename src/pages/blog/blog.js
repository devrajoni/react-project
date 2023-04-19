import Banner from "../../section/blog/banner";
import Latest from "../../section/blog/latest";
import Inquiry from "../../section/blog/inquiry";
import Footer from "../../section/blog/footer";

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
