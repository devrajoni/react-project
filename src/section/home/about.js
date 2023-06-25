import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitle from "../../components/TopTitle";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Service() {
  let [about, setAbout] = useState([]);
  let heading = [
    {
      titleData: "About.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      const url = `${BASE_URL}/about-gallery`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setGallery(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataLoad();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/about`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setAbout(result.data);
      } catch (error) {
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
      <section className="container mt-20 md:mt-40 text-white">
        <div className="py-12">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <LazyLoadImage
              src={`${IMAGE_URL}${gallery.image_one}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="">
              <LazyLoadImage
                src={`${IMAGE_URL}${gallery.image_two}`}
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
            <div className="">
              <LazyLoadImage
                src={`${IMAGE_URL}${gallery.image_three}`}
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-12 md:mb-0 w-full  text-left">
          {about.map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-12 md:border-r-4 border-[#66FCF1]">
              <h3 className="text-bold text-2xl pb-4">{item.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
