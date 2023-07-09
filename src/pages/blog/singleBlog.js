import Footer from "../../section/blog/footer";
import Inquiry from "../../section/blog/inquiry";
import BlogBanner from "../../section/blog/single_blog/banner";
import Content from "../../section/blog/single_blog/content";

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
