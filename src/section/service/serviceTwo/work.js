import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitleTwo from "../../../components/TopTitleTwo";
import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

export default function Work() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/service-work`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setGallery(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  let heading = [
    {
      titleData: "Our Works.",
      subTitle: "See all our works",
    },
  ];

  return (
    <>
      <section className="h-full w-full bg-[#121212]">
        <div className="px-6 lg:px-20 py-16">
          <div className="flex justify-center items-center">
            {heading.map((headings) => (
              <TopTitleTwo headings={headings} />
            ))}
          </div>
          <div className="grid grid-cols-12 mt-16 gap-6 lg:gap-12">
            {gallery.map((data) => (
              <div className="transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4">
                <LazyLoadImage
                  src={`${IMAGE_URL}${data.image}`}
                  alt="work_image"
                  className="hover:scale-110 transition duration-500"
                />
              </div>
            ))}
            {/* <div className='transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4'>
                        <LazyLoadImage src={Image1} alt='work_image' className="hover:scale-110 transition duration-500"/>
                    </div>
                    <div className='transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4'>
                        <LazyLoadImage src={Image2} alt='work_image' className="hover:scale-110 transition duration-500"/>
                    </div> */}
          </div>
          {/* <div className='grid grid-cols-12 mt-16 gap-6 lg:gap-12'>
                    <div className='transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4'>
                        <LazyLoadImage src={Image3} alt='work_image' className="hover:scale-110 transition duration-500"/>
                    </div>
                    <div className='transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4'>
                        <LazyLoadImage src={Image4} alt='work_image' className="hover:scale-110 transition duration-500"/>
                    </div>
                    <div className='transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4'>
                        <LazyLoadImage src={Image5} alt='work_image' className="hover:scale-110 transition duration-500"/>
                    </div>
                </div> */}
          {/* <div className='grid grid-cols-3 gap-8'>

                </div> */}
        </div>
      </section>
    </>
  );
}
