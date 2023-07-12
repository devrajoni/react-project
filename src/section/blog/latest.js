import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import TopTitleTwo from "../../components/TopTitleTwo";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Latest() {
  let [latest, setLatest] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/latest`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setLatest(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  let heading = [
    {
      titleData: "Check our latest news.",
      subTitle: "CHECK OUT SOME OF OUR NEWS",
    },
  ];
  return (
    <>
      <section className="blog-section h-auto  container mb-24 ">
        <div className="flex justify-center items-center h-full mt-12 mb-20 md:mt-24 ">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-6 flex  h-full">
          {latest.slice(0, 6).map((data) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full  text-white  bg-[#0B0C10] border-x-4 flex flex-col justify-between border-b-4 border-[#191919] ">
              <div>
                <div>
                  <LazyLoadImage
                    src={`${IMAGE_URL}${data.image}`}
                    alt="test"
                    className="w-full rounded-t-lg"
                  />
                </div>
                <div className="px-8">
                  <h1 className="font-bold text-2xl pt-2">{data.title}</h1>
                  <div
                    className="text-1xl pt-4"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
              <div className="p-8">
                <Link to={`/blog/${data.id}`}>
                  <button className="btn ring-2 ring-[#66FCF1] p-4 hover:opacity-50">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
