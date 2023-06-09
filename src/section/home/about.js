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
  const ImageOne = gallery.image_one ? `${IMAGE_URL}${gallery?.image_one}` : "";
  const ImageTwo = gallery.image_two ? `${IMAGE_URL}${gallery?.image_two}` : "";
  const ImageThree = gallery.image_three
    ? `${IMAGE_URL}${gallery?.image_three}`
    : "";

  return (
    <>
      <section className="container mt-20 text-white">
        <div className="py-12">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <LazyLoadImage
              src={`${ImageOne}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="">
              <LazyLoadImage
                src={`${ImageTwo}`}
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
            <div className="">
              <LazyLoadImage
                src={`${ImageThree}`}
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-12 md:mb-0 w-full  text-left">
          {about.map((item, index) => (
            <div
              className={
                index === 0
                  ? "col-span-12 md:col-span-6 lg:col-span-4 p-4 md:border-l-4 md:border-r-4 border-[#66FCF1]"
                  : "col-span-12 md:col-span-6 lg:col-span-4 p-4 md:border-r-4 border-[#66FCF1]"
              }
            >
              <h3 className="text-bold text-2xl pb-4">{item.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
