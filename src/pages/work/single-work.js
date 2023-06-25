import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Loader from "../../asset/gif.gif";
import { BASE_URL } from "../../data/baseUrl";
import Banner from "../../section/work/banner";
import Footer from "../../section/work/footer";
import Images from "../../section/work/single-work/image";
import WorkDetails from "../../section/work/single-work/work-details";

export default function SingleWork() {
  const { id } = useParams();
  const [work, setWork] = useState({});
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      const url = `${BASE_URL}/single-work/${id}`;
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result);
        setWork(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (isloading) {
    return (
      <div className="h-screen text-white flex justify-center items-cneter">
        <LazyLoadImage src={Loader} />
      </div>
    );
  }

  return (
    <>
      <div>
        <Banner />
        <Images />
        <WorkDetails data={work} />
        <Footer />
      </div>
    </>
  );
}