import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../data/baseUrl";
import Footer from "../../section/blog/footer";
import Inquiry from "../../section/blog/inquiry";
import Content from "../../section/blog/latest/content";
import BlogBanner from "../../section/blog/single_blog/banner";
import Comment from "../../section/blog/single_blog/comment";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchLatestData = async () => {
      const url = `${BASE_URL}/latest`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setLatest(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBlogData = async () => {
      const URL = `${BASE_URL}/blog-details/${id}`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setBlog(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestData();
    fetchBlogData();
  }, [id]);
  return (
    <>
      <div>
        <BlogBanner />
        <Content />
        <Comment blog={blog} />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
