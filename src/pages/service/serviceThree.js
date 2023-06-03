import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Loader from "../../asset/gif.gif";
import { BASE_URL } from "../../data/baseUrl";
import Activity from "../../section/service/serviceThree/activity";
import Banner from "../../section/service/serviceThree/banner";
import Feature from "../../section/service/serviceThree/feature";
import Footer from "../../section/service/serviceThree/footer";
import Image from "../../section/service/serviceThree/image";
import Inquiry from "../../section/service/serviceThree/inquiry";
import Similar from "../../section/service/serviceThree/similar";
import Space from "../../section/service/serviceThree/space";

export default function ServiceThree() {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      const url = `${BASE_URL}/single-service/${id}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setService(result);
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
  // console.log("hi" ,service);
  return (
    <>
      <div>
        {service.data && <Banner data={service?.data[0]} />}
        <Feature data={service?.data} />
        <Image />
        <Space />
        <Activity data={service?.data} />
        <Similar data={service?.services} />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
