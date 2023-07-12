import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../../data/baseUrl";

export default function Content({ latest, blog }) {
  return (
    <>
      <section className=" container">
        <div className="grid grid-cols-12 gap-4 py-28 lg:gap-12">
          <div className="col-span-12 md:col-span-8  text-white">
            <div>
              <LazyLoadImage
                src={`${IMAGE_URL}${blog.image}`}
                alt="test"
                className="w-full rounded-lg"
                style={{ height: "400px" }}
              />
            </div>
            <div>
              <h1 className="text-bold text-4xl pt-6">{blog.title}</h1>
              <div className="pt-6">
                <div
                  className="text-1xl pt-4"
                  dangerouslySetInnerHTML={{ __html: blog.long_description }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-white">
            <div className=" bg-[#0B0C10] border  pb-8 border-[#66FCF1] rounded-md border-opacity-20 drop-shadow-xl">
              <div>
                <h1 className="text-bold text-[#66FCF1] text-xl py-6 flex justify-center">
                  Latest Post
                </h1>
              </div>
              {latest.slice(0, 10).map((data) => (
                <div className="grid grid-cols-12 gap-6 h-full p-3 flex flex-row justify-between">
                  <div className="col-span-4">
                    <div>
                      <LazyLoadImage
                        src={`${IMAGE_URL}${data.image}`}
                        alt="test"
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div>
                      <Link to={`/latest/${data.id}`}>
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
