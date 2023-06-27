import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import TopTitleTwo from "../../../components/TopTitleTwo";
import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

export default function Services() {
  let [service, setService] = useState([]);
  let heading = [
    {
      titleData: "Services.",
      subTitle: "OUR SERVICES FOR CLIENTS",
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      const URL = `${BASE_URL}/service`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setService(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  // let cardContents = [
  //     {
  //         icon:'stats-chart-outline',
  //         title:'UX design',
  //         text:'We deliver intuitive and engaging experience to the end-users of your application. SKY Digital applies its vast technology expertise and domain knowledge to develop landmark applications.',
  //     },
  //     {
  //         icon:'pencil-outline',
  //         title:'Brand manual',
  //         text:'We make brands fly! We grow your business by combining the best in design, marketing and digital disciplines by creating meaningful brand experiences. Think of us as ‘integral’ to your strategy from brand design, development & growth.',
  //     },
  //     {
  //         icon:'people-circle-outline',
  //         title:'SEO',
  //         text:'We increase your revenues and userbase with our award-winning SEO services including Search Engine Optimization, Pay-Per-Click, Advertising · Mobile Optimization as Clutch 2021 Top Internet Marketing Company.',
  //     },
  //     {
  //         icon:'globe-outline',
  //         title:'Social Media',
  //         text:'We make sure your online website is meeting all the needs of your shoppers. We provide the best ecommerce development services that will help you tap into market trends, leverage advanced technologies, and infuse creativity into your process.​',
  //     },
  //     {
  //         icon:'triangle-outline',
  //         title:'Website',
  //         text:'Our experienced web development teams deliver websites, web portals, and web-based solutions and applications. We are one of the a few companies that specialize in developing software as a service (saas) platforms using the latest technologies in web 3.0.',
  //     },
  //     {
  //         icon:'stats-chart-outline',
  //         title:'Mobile Apps',
  //         text:'We develop both Hybrid & Native mobile Apps for IOS & Android Mobile & Smart devices. We have successfully completed over 300+ mobile projects and this allowed us to gain Experience in a variety of latest mobile technologies including Augmented and Virtual Reality and Artificial Intelligence.​',
  //     }
  //   ];

  return (
    <>
      <section className="service-section my-20 container">
        <div className="flex justify-center items-center h-full w-full mb-16">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div class="grid grid-cols-12 gap-6 h-auto  drop-shadow-md">
          {service.map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#121212] px-12 py-12 border-b-4 border-white hover:border-[#66FCF1] drop-shadow-2xl">
              <div className="text-[#66FCF1] text-4xl mb-8 md:text-4xl">
                <LazyLoadImage
                  src={`${IMAGE_URL}${item.icon}`}
                  alt="test"
                  className="w-auto h-8 object-cover object-center"
                />
              </div>
              <div className="content">
                <h1 className="font-bold text-2xl pb-4 text-white">
                  <Link to={`/service/${item.id}`}>{item.name}</Link>
                </h1>
                <hr className="mb-4 h-0.5 text-2xl w-16 bg-[#66FCF1]" />
                <div
                  className="font-medium text-white"
                  dangerouslySetInnerHTML={{ __html: item.short_description }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
