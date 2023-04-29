import Image1 from "../../../asset/similar_1.jpg";
import Image2 from "../../../asset/similar_2.jpg";
import Image3 from "../../../asset/similar_3.jpg";
import TopTitleTwo from "../../../components/TopTitleTwo";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Similar() {
  let heading = [
    {
      titleData: "Similar Project",
      subTitle: "THIS IS A SIMILAR PROJECT",
    },
  ];

  return (
    <>
      <section className="mt-16 md:mt-24 md:px-20 px-6">
        <div className="flex justify-center items-center h-full w-full pb-16">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div class="grid grid-cols-12 gap-4 lg:gap-12 h-auto mb-12 drop-shadow-md text-white">
          <div className="transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4">
            <LazyLoadImage
              src={Image1}
              alt="similar"
              className="hover:scale-110 transition duration-500 w-full"
            />
          </div>
          <div className="transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4">
            <LazyLoadImage
              src={Image2}
              alt="similar"
              className="hover:scale-110 transition duration-500 w-full h-auto"
            />
          </div>
          <div className="transition testing overflow-hidden col-span-12 md:col-span-6 lg:col-span-4">
            <LazyLoadImage
              src={Image3}
              alt="similar"
              className="hover:scale-110 transition duration-500 w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
