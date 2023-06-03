import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../../asset/activity_1.jpg";
import HorizontalLine from "../../../components/HorizontalLine";
import TopTitleTwo from "../../../components/TopTitleTwo";
// import Card from "../../../components/Card";

export default function Activity({ data = [] }) {
  let heading = [
    {
      titleData: "Activity Tracker.",
      subTitle: "what are the advantages of this product?",
    },
  ];

  console.log("string", data);

  return (
    <>
      <section className="px-6 lg:px-20 bg-[#121212]">
        <div className="flex justify-center items-center h-full w-full py-20">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div class="grid grid-cols-12 gap-y-4 md:gap-12 h-auto drop-shadow-md text-white">
          <div className="col-span-12 md:col-span-6">
            <LazyLoadImage src={Image} alt="activity" className="w-full" />
          </div>
          <div className="col-span-12 md:col-span-6 text-left">
            <h3 className="font-bold text-2xl pb-4">Customer Opinion</h3>
            <p className="text-1xl py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              feugiat posuere orci, eget semper magna suscipit nec.
            </p>
            {/* <ul className="skill-container">
              <li className="DURABILITY">DURABILITY</li>
              <li className="BATTERYLIFE">BATTERY LIFE</li>
              <li className="DESIGN">DESIGN</li>
              <li className="CONVENIENCE">CONVENIENCE</li>
              <li className="PRICE">PRICE</li>
            </ul> */}
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
              {/* <div>
                <label for="file" style={{paddingRight:"10px"}}>BATTERY LIFE</label>
                <progress id="file" value="40" max="100" style={{width:"100%", borderRadius:"30px", height:"10px"}}> 40% </progress>
              </div>
              <div>
                <label for="file">DESIGN</label>
                <progress id="file" value="50" max="100" style={{width:"100%", borderRadius:"30px", height:"10px"}}> 50% </progress>
              </div> */}
            </div>
          </div>
        </div>
        <div className="py-20">
          <HorizontalLine />
        </div>
      </section>
    </>
  );
}
