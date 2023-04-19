import { useState } from "react";
import image1 from "../../asset/work_cat.jpg";

const works = [
  {
    id: 1,
    title: "All",
    image: image1,
    category: "Architecture",
  },
  {
    id: 2,
    title: "All",
    image: image1,
    category: "Design",
  },
  {
    id: 3,
    title: "All",
    image: image1,
    category: "Architecture",
  },
];

function Category() {
  const [category, setCategory] = useState("");

  console.log(works);
  console.log(category);
  const selectedWorks =
    category === ""
      ? works
      : works.filter((work) => {
          return work.category.toLowerCase() === category.toLowerCase();
        });
  console.log(selectedWorks);
  return (
    <div className="py-32 text-white">
      <div className="flex justify-center">
        <div className="flex gap-4">
          <button onClick={() => setCategory("")}>All</button>
          <button onClick={() => setCategory("Architecture")}>
            Architecture
          </button>
          <button onClick={() => setCategory("Design")}>Design</button>
          {/* <button>All</button> */}
        </div>
      </div>
    </div>
  );
}

export default Category;
