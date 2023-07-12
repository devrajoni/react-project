import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/Button";
import TopTitle from "../../components/TopTitle";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Work() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/work-gallery`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (Array.isArray(result.data)) {
          setWork(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  const data = [
    {
      titleData: "Works.",
      subTitle: "Flagship projects",
    },
  ];
  console.log(work);
  return (
    <>
      <section className="">
        <div className=" text-white  bg-[#121212]">
          <div className="container pt-20  pb-12 flex justify-between">
            <div className="content">
              {data.map((headings, index) => (
                <TopTitle key={index} headings={headings} />
              ))}
            </div>
            <Link to="/work">
              <Button name="View All" />
            </Link>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
        >
          {work?.map((item) => (
            <SwiperSlide className="mb-20 " key={item.id}>
              <div className="text-white">
                <div className="item">
                  <LazyLoadImage
                    src={`${IMAGE_URL}${item.image}`}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
