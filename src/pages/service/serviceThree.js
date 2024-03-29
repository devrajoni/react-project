import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Loader from "../../asset/gif.gif";
import { BASE_URL } from "../../data/baseUrl";
import Activity from "../../section/service/serviceThree/activity";
import Banner from "../../section/service/serviceThree/banner";
import Feature from "../../section/service/serviceThree/feature";
import Footer from "../../section/service/serviceThree/footer";
import Inquiry from "../../section/service/serviceThree/inquiry";
import Similar from "../../section/service/serviceThree/similar";

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
      <div className="h-screen py-32 text-white flex justify-center text-sm items-cneter">
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
        <Activity data={service?.data} />
        <Similar data={service?.services} />
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
