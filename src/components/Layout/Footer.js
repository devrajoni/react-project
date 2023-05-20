import { useState, useEffect } from 'react';
import { BASE_URL, IMAGE_URL } from '../../data/baseUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";

export default function Footer() {
  let [setting, setSetting] = useState([]);
  let [social, setSocial] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const url = `${BASE_URL}/social`
      try{
        const response  = await fetch(url);
        const result = await response.json();
        setSocial(result.data);
      }catch(error){
        console.log(error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
      const loadData = async() => {
          const url = `${BASE_URL}/setting`;
          try{
              const response = await fetch(url);
              const result = await response.json();
              setSetting(result.data);
          }catch(error){
              console.log(error);
          }
      };
      loadData()
  }, []);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-12 gap-6 px-6 lg:px-20 mt-12 md:mt-16 mb-16 text-white text-left">
          <div className="col-span-12 md:col-span-3 lg:col-span-3 md:text-xs">
            <p className="pb-4"><Link to="/"><LazyLoadImage src={`${IMAGE_URL}${setting.company_logo}`} alt='test' className='w-8 h-8 object-cover object-center  rounded-t-lg' /></Link>
            </p>
            <div className="text-1xl pb-4" dangerouslySetInnerHTML={{__html:setting.description}} />
            <hr className="h-0.5 text-2xl w-16 bg-[#66FCF1]" />
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-3 md:text-xs">
            <h1 className="text-2xl pb-4">Contact Us</h1>
            <div className="flex pb-4 gap-2">
              <ion-icon name="call-outline"></ion-icon>
              <p className="text-1xl">{setting.phone}</p>
            </div>
            <div className="flex pb-4 gap-2">
              <ion-icon name="mail-outline"></ion-icon>
              <p className="text-1xl">{setting.email}</p>
            </div>
            <div className="flex pb-4 gap-2">
              <ion-icon name="location-outline"></ion-icon>
              <p className="text-1xl">{setting.address}</p>
            </div>
            <div className="flex pb-4 gap-2">
              <ion-icon name="calendar-outline"></ion-icon>
              <p className="text-1xl ">Monday to Friday</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3 md:text-xs">
            <h1 className="text-2xl pb-4">Our Services</h1>
              <Link to='/single-project'><p className="text-1xl pb-4">Single Project</p></Link>
              <Link to='/service'><p className="text-1xl pb-4">Service 1</p></Link>
              <Link to='/service'><p className="text-1xl pb-4">Service 2</p></Link>
              <Link to='/work'><p className="text-1xl pb-4">Works</p></Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3 md:text-xs">
            <h1 className="text-2xl pb-4">About Us</h1>
              <Link to='/about'><p className="text-1xl pb-4">About</p></Link>
              <Link to='/blog'><p className="text-1xl pb-4">Blog</p></Link>
              <Link to='/contact'><p className="text-1xl pb-4">Contact Us 1</p></Link>
              <Link to='/contact'><p className="text-1xl pb-4">Contact Us 2</p></Link>
          </div>
        </div>
      </div>
      <div className="mb-8 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-white mt-8 text-sm">
          <p>Copyright {setting.copyright_year} All rights reserved</p>
          <div className="flex gap-6 text-white">
            <p>PRIVACY POLICY</p>
            <p>Terms of Use</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2   text-white text-left mt-4">
          <div className="text-xs mb-6 sm:mb-4" dangerouslySetInnerHTML={{__html:setting.landing_description}} />
          <div className="flex gap-6 text-bold  md:ps-56 lg:ps-96">
            <div>
              <Link to={social.facebook} target="_blank"><ion-icon name="logo-facebook" className=""></ion-icon></Link>
            </div>
            <div>
              <Link to={social.twitter} target="_blank"><ion-icon name="logo-twitter"></ion-icon></Link>
            </div>
            <div>
              <Link to={social.instagram} target="_blank"><ion-icon name="logo-instagram"></ion-icon></Link>
            </div>
            <div>
              <Link to={social.youtube} target="_blank"><ion-icon name="logo-youtube"></ion-icon></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
