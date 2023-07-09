import Footer from "../../section/blog/footer";
import Inquiry from "../../section/blog/inquiry";
import Content from "../../section/blog/latest/content";
import BlogBanner from "../../section/blog/single_blog/banner";

export default function Blog() {
  return (
    <>
      <div>
        <BlogBanner />
        <Content />
        {/* <Comment /> */}
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
