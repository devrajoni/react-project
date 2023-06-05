import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitle from "../../components/TopTitle";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Testimonial() {
  let [testimonial, setTestimonial] = useState([]);

  let heading = [
    {
      titleData: "Testimonials.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/testimonial`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setTestimonial(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  // let items = [
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  //     star: "star",
  //     image: Test1,
  //     name: "Jhon Doe",
  //     designation: "Designation",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  //     star: "star",
  //     image: Test2,
  //     name: "Jhon Doe",
  //     designation: "Designation",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  //     star: "star",
  //     image: Test3,
  //     name: "Jhon Doe",
  //     designation: "Designation",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  //     star: "star",
  //     image: Test1,
  //     name: "Jhon Doe",
  //     designation: "Designation",
  //   },
  // ];

  return (
    <>
      <section className="service-section mt-16 md:mt-28 bg-[#121212]">
        <div className="px-6 lg:px-20 text-white  ">
          <div className="content pt-28 pb-16">
            {heading.map((headings) => (
              <TopTitle headings={headings} />
            ))}
          </div>
        </div>
        <div class="grid grid-cols-12 px-12 gap-6 mb-12 w-full text-white px-6 lg:px-20">
          {testimonial.slice(0, 4).map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#0B0C10] px-8 pt-12 gap-6 mb-44 ring-4 ring-[#191919] relative">
              <div
                className=" font-medium text-center"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <div className="py-8 mb-28 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <div className="absolute bottom-0 translate-y-1/2 w-full  left-0">
                <div className=" flex justify-center items-center text-white">
                  <LazyLoadImage
                    key={item.id}
                    src={`${IMAGE_URL}${item.image}`}
                    className="h-32 w-32 rounded-full mt-16"
                    alt="testimonial1"
                  />
                </div>
                <div className="text-center pt-4 gap-6">
                  <h3 className="font-bold text-2xl">{item.name}</h3>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-rows-7 md:grid-rows-1 grid-flow-col gap-8 lg:gap-24 px-12 lg:px-40 pt-12">
          <LazyLoadImage
            src={Icon1}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon2}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon3}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon4}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon5}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon6}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
          <LazyLoadImage
            src={Icon7}
            alt="icon1"
            className="h-8 md:h-16 w-8 md:w-16"
          />
        </div> */}
        <div className="flex justify-center item-center p-24">
          <hr className="h-20 w-1 bg-[#66FCF1]"></hr>
        </div>
      </section>
    </>
  );
}
