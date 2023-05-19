import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";
import Activity from "../../section/service/serviceThree/activity";
import Banner from "../../section/service/serviceThree/banner";
import Feature from "../../section/service/serviceThree/feature";
import Footer from "../../section/service/serviceThree/footer";
import Image from "../../section/service/serviceThree/image";
import Inquiry from "../../section/service/serviceThree/inquiry";
import Similar from "../../section/service/serviceThree/similar";
import Space from "../../section/service/serviceThree/space";


export default function ServiceThree() {
  const  {id} = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const loadData = async() => {
    const url = `${BASE_URL}/single-service/${id}`;
      try{
        const response = await fetch(url);
        const result = await response.json();
        setService(result.data);
      }catch(error){
        console.log(error);
      }
    };
    loadData();
  },[id]);



  console.log(service);
  return (
    <>
      <div>
        <Banner data={service[0]} key={service.id}/>
        <Feature data={service} key={service.id}/>
        <Image />
        <Space />
        <Activity data={service} key={service.id}/>
        <Similar/>
        <Inquiry />
        <Footer />
      </div>
    </>
  );
}
