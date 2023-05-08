import { useState, useEffect } from "react";
import TopTitle from "../../components/TopTitle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BASE_URL } from "../../data/baseUrl";

export default function Service() {
  let[about, setAbout] = useState([]);
  let heading = [
    {
      titleData: "About.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  useEffect(() => {
    const loadData = async() =>{
      const url = `${BASE_URL}/about`;
      try{
        const response = await fetch(url);
        const result = await response.json();
        setAbout(result.data);
      }catch(error){
        console.log(error);
      }
    };
    loadData();
  }, []);

  let items = [
    {
      title: "Guide for Email Marketing",
      description:
        "The latest email marketing and marketing automation techniques deployed by brand...",
    },
    {
      title: "Digital Marketing Template",
      description:
        "Business people planning digital marketing strategy Our popular digital marketin...",
    },
    {
      title: "Social Media Cheatsheet",
      description:
        "Social media addiction Free Google and Facebook Paid Media Cheatsheet Review you...",
    },
  ];

  return (
    <>
      <section className=" mt-20 px-6 md:mt-40 lg:px-20 text-white">
        <div className="my-20">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <LazyLoadImage
              src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/people-working-in-office-e1613655962551.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="">
              <LazyLoadImage
                src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/people-working-in-office-1.jpg"
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
            <div className="">
              <LazyLoadImage
                src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/office-e1613655942670.jpg"
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-12 md:mb-0 w-full bg-slate-900 text-left">
          {about.map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1]">
              <h3 className="text-bold text-2xl pb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
