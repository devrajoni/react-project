import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import TopTitle from "../../components/TopTitle";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Service() {
  const { id } = useParams();
  const [service, setService] = useState([]);

  const heading = [
    {
      titleData: "Services.",
      subTitle: "OUR SERVICES FOR CLIENTS",
    },
  ];

  // let cardContents = [
  //   {
  //     icon: "stats-chart-outline",
  //     title: "UX design",
  //     text: "We deliver intuitive and engaging experience to the end-users of your application. SKY Digital applies its vast technology expertise and domain knowledge to develop landmark applications.",
  //   },
  //   {
  //     icon: "pencil-outline",
  //     title: "Brand manual",
  //     text: "We make brands fly! We grow your business by combining the best in design, marketing and digital disciplines by creating meaningful brand experiences. Think of us as ‘integral’ to your strategy from brand design, development & growth.",
  //   },
  //   {
  //     icon: "people-circle-outline",
  //     title: "SEO",
  //     text: "We increase your revenues and userbase with our award-winning SEO services including Search Engine Optimization, Pay-Per-Click, Advertising · Mobile Optimization as Clutch 2021 Top Internet Marketing Company.",
  //   },
  //   {
  //     icon: "globe-outline",
  //     title: "Social Media",
  //     text: "We make sure your online website is meeting all the needs of your shoppers. We provide the best ecommerce development services that will help you tap into market trends, leverage advanced technologies, and infuse creativity into your process.​",
  //   },
  //   {
  //     icon: "triangle-outline",
  //     title: "Website",
  //     text: "Our experienced web development teams deliver websites, web portals, and web-based solutions and applications. We are one of the a few companies that specialize in developing software as a service (saas) platforms using the latest technologies in web 3.0.",
  //   },
  //   {
  //     icon: "stats-chart-outline",
  //     title: "Mobile Apps",
  //     text: "We develop both Hybrid & Native mobile Apps for IOS & Android Mobile & Smart devices. We have successfully completed over 300+ mobile projects and this allowed us to gain Experience in a variety of latest mobile technologies including Augmented and Virtual Reality and Artificial Intelligence.​",
  //   },
  // ];

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
  }, [id]);

  return (
    <>
      <section className="service-section mt-20 mb-32 container">
        <div className="py-12">
          {heading.slice(0, 6).map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div class="grid grid-cols-12 gap-6 h-auto mb-12 drop-shadow-md ">
          {service.slice(3, 9).map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#121212] p-8 border-b-4 border-white hover:border-[#66FCF1] drop-shadow-2xl">
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

// function ServiceCard({item}) {
//   const [color, setColor] = useState("#66FCF1");

//   const changeColor = () => {
//     const r = ["#3f3cbb", "#3ab7bf", "#565584"];
//     const m = r[Math.floor(Math.random()*r.length)];
//     return m;
//   };
