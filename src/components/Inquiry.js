import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quiry from "../asset/quiry.jpg";
import { BASE_URL } from "./../data/baseUrl";
import Button from "./Button";
import HorizontalLine from "./HorizontalLine";

export default function Inquiry() {
  let [social, setSocial] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/social`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setSocial(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <section
        className=" pb-8 text-white relative w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Quiry})` }}
      >
        {/* <img src={Quiry} alt="quiry" className="absolute inset-0" /> */}
        <div className="container flex justify-center item-center py-20">
          <div className="text-center">
            <HorizontalLine />
            <div className="text-2xl mt-20 flex justify-center item-center gap-8 mb-8">
              <div className="ring-2 ring-[#66FCF1] h-12 w-12 rounded-full  flex items-center justify-center">
                <Link
                  to={social.facebook}
                  target="_blank"
                  className=" flex justify-center items-center h-full w-full "
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </div>
              <div className="ring-2 ring-[#66FCF1] h-12 w-12 rounded-full flex items-center justify-center">
                <Link
                  to={social.twitter}
                  target="_blank"
                  className=" flex justify-center items-center h-full w-full"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </div>
              <div className="ring-2 ring-[#66FCF1] h-12 w-12 rounded-full  flex items-center justify-center">
                <Link
                  to={social.instagram}
                  target="_blank"
                  className=" flex justify-center items-center h-full w-full "
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </div>
              <div className="ring-2 ring-[#66FCF1] h-12 w-12 rounded-full flex items-center justify-center">
                <Link
                  to={social.youtube}
                  target="_blank"
                  className=" flex justify-center items-center h-full w-full"
                >
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-center pb-12">
              Have any project in mind?
            </h3>
            <Button name="Make Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
