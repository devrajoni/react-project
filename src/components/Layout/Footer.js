import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Footer() {
  const [setting, setSetting] = useContext(DataContext);
  const [social, setSocial] = useState([]);

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
      <div className="">
        <div className="grid grid-cols-12 gap-4 lg:gap-16 container pt-12 md:pt-16 pb-16 text-white text-left">
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <p>
              <Link to="/">
                <LazyLoadImage
                  src={`${IMAGE_URL}${setting.company_logo}`}
                  alt="test"
                  className="h-12 lg:h-16 object-cover object-center  rounded-t-lg"
                />
              </Link>
            </p>
            <div
              className="text-1xl pb-4"
              dangerouslySetInnerHTML={{ __html: setting.description }}
            />
            <hr className="h-0.5 text-2xl w-16 bg-[#66FCF1]" />
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <h1 className="text-2xl pb-4">Our Services</h1>
            {/* <Link to="/single-project">
              <p className="text-1xl pb-4">Single Project</p>
            </Link> */}
            <Link to="/service">
              <p className="text-1xl pb-4">Service</p>
            </Link>
            <Link to="/work">
              <p className="text-1xl pb-4">Work</p>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <h1 className="text-2xl pb-4">About Us</h1>
            <Link to="/about">
              <p className="text-1xl pb-4">About</p>
            </Link>
            <Link to="/blog">
              <p className="text-1xl pb-4">Blog</p>
            </Link>
            <Link to="/contact">
              <p className="text-1xl pb-4">Contact</p>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <h1 className="text-2xl pb-4">Contact Us</h1>
            <div className="flex items-center pb-4 gap-2">
              <ion-icon name="call-outline"></ion-icon>
              <p className="text-1xl">{setting.phone}</p>
            </div>
            <div className="flex items-center pb-4 gap-2">
              <ion-icon name="mail-outline"></ion-icon>
              <p className="text-1xl">{setting.email}</p>
            </div>
            <div className="flex items-center pb-4 gap-2">
              <ion-icon name="location-outline"></ion-icon>
              <p className="text-1xl">{setting.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8 container mt-4">
        <div className="lg:flex justify-between mt-8">
          <div
            className="text-sm pb-6 sm:pb-4"
            dangerouslySetInnerHTML={{ __html: setting.landing_description }}
          />
          <div className="flex gap-6 text-bold text-white  lg:ps-96">
            <div className="text-2xl">
              <Link to={social.facebook} target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </div>
            <div className="text-2xl">
              <Link to={social.twitter} target="_blank">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </div>
            <div className="text-2xl">
              <Link to={social.instagram} target="_blank">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
            <div className="text-2xl">
              <Link to={social.youtube} target="_blank">
                <ion-icon name="logo-youtube"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   text-white text-left ">
          <div className=" text-white mt-4 text-sm">
            <div className="flex gap-6 pb-2 text-white">
              <p>PRIVACY POLICY</p>
              <p>Terms of Use</p>
            </div>
            <div>
              <p>
                Copyright @SKY Digital {setting.copyright_year} All rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
