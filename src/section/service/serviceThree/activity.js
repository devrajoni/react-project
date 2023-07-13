import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitleTwo from "../../../components/TopTitleTwo";
import { IMAGE_URL } from "../../../data/baseUrl";
// import Card from "../../../components/Card";

export default function Activity({ data = [] }) {
  let heading = [
    {
      titleData: "Activity Tracker.",
      subTitle: "what are the advantages of this product?",
    },
  ];

  return (
    <>
      <section className=" bg-[#121212]">
        <div className="container pb-20">
          <div className="flex justify-center items-center h-full w-full py-20">
            {heading.map((headings) => (
              <TopTitleTwo headings={headings} />
            ))}
          </div>
          <div class="grid grid-cols-12 gap-y-4 md:gap-12  h-auto drop-shadow-md text-white">
            <div className="col-span-12 md:col-span-6">
              <LazyLoadImage
                src={`${IMAGE_URL}${data[0]?.image}`}
                alt="activity"
                className="w-full h-full"
              />
            </div>
            <div className="col-span-12 flex flex-col md:col-span-6 text-left">
              <h3 className="font-bold text-2xl pb-4">Customer Opinion</h3>
              <p className="text-1xl pt-4 pb-8">
                Want to boost your business to higher levels of success? Adding
                new services could be the answer, and SKY Digital can deliver
                bespoke software solutions in line with your goals.
              </p>
              <div>
                {data[0]?.skill.map((item) => (
                  <div className="pb-3">
                    <div className="flex justify-between">
                      <label for="file" className="text-left">
                        {item.name}
                      </label>
                      <p>{item.percentage}</p>
                    </div>
                    <progress
                      className="!rounded-full"
                      id="file"
                      value={item.percentage.split("%")[0]}
                      max="100"
                      style={{ width: "100%", height: "10px" }}
                    >
                      32%
                    </progress>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
