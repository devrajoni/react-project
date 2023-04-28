import { useState } from "react";
import architecture_1 from "../../asset/architecture_1.jpg";
import architecture_2 from "../../asset/architecture_2.jpg";
import architecture_3 from "../../asset/architecture_3.jpg";
import architecture_4 from "../../asset/architecture_4.jpg";
import design_1 from "../../asset/design_1.jpg";
import design_2 from "../../asset/design_2.jpg";
import design_3 from "../../asset/design_3.jpg";
import photography_1 from "../../asset/photography_1.jpg";
import photography_2 from "../../asset/photography_2.jpg";
import photography_3 from "../../asset/photography_3.jpg";
import TopTitleTwo from "../../components/TopTitleTwo";

const works = [
  {
    id: 1,
    title: "Product Photography",
    image: photography_1,
    category: "Photography",
  },
  {
    id: 2,
    title: "Product Photography",
    image: photography_2,
    category: "Photography",
  },
  {
    id: 3,
    title: "Wedding Photography",
    image: photography_3,
    category: "Photography",
  },
  {
    id: 4,
    title: "Interrior Design",
    image: architecture_1,
    category: "Architecture",
  },
  {
    id: 5,
    title: "Architecture",
    image: architecture_2,
    category: "Architecture",
  },
  {
    id: 6,
    title: "Building Architecture",
    image: architecture_3,
    category: "Architecture",
  },
  {
    id: 7,
    title: "Building Architecture",
    image: architecture_4,
    category: "Architecture",
  },
  {
    id: 8,
    title: "UI Design",
    image: design_1,
    category: "Design",
  },
  {
    id: 9,
    title: "Color Palatte",
    image: design_2,
    category: "Design",
  },
  {
    id: 10,
    title: "UI Design",
    image: design_3,
    category: "Design",
  },
];

let heading = [
  {
    titleData: "Our Works.",
    subTitle: "CHECK OUT SOME OF OUR NEWS",
  },
];

export default function Work() {
  const [category, setCategory] = useState("");

  const selectedWorks =
    category === ""
      ? works
      : works.filter((work) => {
          return work.category.toLowerCase() === category.toLowerCase();
        });

  return (
    <div>
      <section className="work-section mb-12 md:mb-32">
        <div className="flex justify-center items-center h-full py-16 md:px-20 px-12">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div className="flex justify-center ">
          <div className=" flex gap-x-4 md:gap-x-8 text-white md:text-2xl mb-16">
            <button
              className={`${category === "" ? "bg-[#66FCF1] py-2 px-8" : ""}`}
              onClick={() => setCategory("")}
            >
              All
            </button>
            <button
              className={`${
                category === "Photography" ? "bg-[#66FCF1] py-2 px-8" : ""
              }`}
              onClick={() => setCategory("Photography")}
            >
              Photography
            </button>
            <button
              className={`${
                category === "Architecture" ? "bg-[#66FCF1] py-2 px-8" : ""
              }`}
              onClick={() => setCategory("Architecture")}
            >
              Architecture
            </button>
            <button
              className={`${
                category === "Design" ? "bg-[#66FCF1] py-2 px-8" : ""
              }`}
              onClick={() => setCategory("Design")}
            >
              Design
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 px-12 md:px-40 ">
          {selectedWorks.map((data) => {
            return (
              <div
                className="col-span-12 md:col-span-6 relative group"
                key={data.id}
              >
                <img src={data.image} alt="image1" />
                <div className="absolute flex items-center justify-center inset-0 bg-black/0 group-hover:bg-black/50">
                  <p className="text-white text-bold text-2xl opacity-0 group-hover:opacity-100">
                    {data.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
