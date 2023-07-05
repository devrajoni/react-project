import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

export default function Content() {
  const { id } = useParams();
  let [blog, setBlog] = useState([]);
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

  useEffect(() => {
    const loadData = async () => {
      const URL = `${BASE_URL}/blog-details/${id}`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setBlog(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);
  return (
    <>
      <section className=" container">
        <div className="grid grid-cols-12 gap-4 py-28 lg:gap-12">
          {blog.map((item) => (
            <div className="col-span-12 md:col-span-8  text-white">
              <div>
                <LazyLoadImage
                  src={`${IMAGE_URL}${item.image}`}
                  alt="test"
                  className="w-full rounded-t-lg"
                  style={{ height: "400px" }}
                />
              </div>
              <div>
                <h1 className="text-bold text-4xl pt-6">{item.title}</h1>
                <div className="pt-6">
                  <div
                    className="text-1xl pt-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-12 md:col-span-4 text-white">
            <div className=" bg-[#0B0C10] border  pb-8 border-[#66FCF1] rounded-md border-opacity-20 drop-shadow-xl">
              <div>
                <h1 className="text-bold text-[#66FCF1] text-xl py-6 flex justify-center">
                  Latest Post
                </h1>
              </div>
              {latest.slice(0, 10).map((data) => (
                <div className="grid grid-cols-12 gap-6  flex flex-col p-3 justify-between">
                  <div className="col-span-4 h-full ">
                    <div>
                      <LazyLoadImage
                        src={`${IMAGE_URL}${data.image}`}
                        alt="test"
                        className="w-full rounded-t-lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div>
                      <Link to={`/blog/${data.id}`}>
                        <p>{data.title}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
