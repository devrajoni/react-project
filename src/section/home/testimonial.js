import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitle from "../../components/TopTitle";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Testimonial() {
  let [testimonial, setTestimonial] = useState([]);
  let [load, setLoad] = useState(4);

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

  const loadMore = () => {
    setLoad((prevValue) => prevValue + 4);
  };

  return (
    <>
      <section className=" mt-16 md:mt-28 bg-[#121212]">
        <div className="container">
          <div className=" text-white  ">
            <div className="content pt-20 pb-12">
              {heading.map((headings) => (
                <TopTitle headings={headings} />
              ))}
            </div>
          </div>
          <div class="grid grid-cols-12  gap-4 text-white">
            {testimonial.slice(0, load).map((item) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between bg-[#0B0C10] px-8 pt-12 gap-6 ring-4 ring-[#191919]">
                <div>
                  <div
                    className=" font-medium text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className="pt-8 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className=" py-8">
                    <LazyLoadImage
                      key={item.id}
                      src={`${IMAGE_URL}${item.image}`}
                      className="rounded-full"
                      // style={{ height: "100px", width: "100px" }}
                      alt="testimonial1"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-xs">{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-12 pb-16">
            <button
              onClick={loadMore}
              className="text-white  border border-[#66FCF1] rounded-md border-opacity-20  px-6 py-4 font-bold text-1xl uppercase"
            >
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
