import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

  console.log(work);

  const data = [
    {
      titleData: "Works.",
      subTitle: "Flagship projects",
    },
  ];

  return (
    <>
      <section className="mt-16 md:mt-28">
        <div className="mt-12 md:mt-16 text-white  bg-[#121212]">
          <div className="px-6  py-12 lg:px-16 flex justify-between">
            <div className="content">
              {data.map((headings, index) => (
                <TopTitle key={index} headings={headings} />
              ))}
            </div>
            <Button name="View All" />
          </div>
        </div>
        <div className="flex">
          {work.map((item, index) => (
            <div key={index} className="item">
              <LazyLoadImage
                src={`${IMAGE_URL}${item.image}`}
                alt=""
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
