import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../asset/why.jpg";
import TopTitle from "../../components/TopTitle";

export default function Service() {
  let heading = [
    {
      titleData: "Why us?",
      subTitle: "WHY OUR CLIENTS CHOOSE US FOR THEIR PROJECT?",
    },
  ];

  return (
    <>
      <section className="text-white px-6 lg:px-20">
        <div className="my-20 ">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex gap-8 pb-20 mt-12">
              <div className="text-4xl text-[#66FCF1]">
                <ion-icon name="newspaper-outline"></ion-icon>
              </div>
              <div>
                <h3 className="text-2xl font-bold pb-4">Fast Response</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque consequat diam ac.
                </p>
              </div>
            </div>
            <div className="flex gap-8 pb-20">
              <div className="text-4xl text-[#66FCF1]">
                <ion-icon name="move-outline"></ion-icon>
              </div>
              <div>
                <h3 className="text-2xl font-bold pb-4">
                  World Class Designer
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque consequat diam ac.
                </p>
              </div>
            </div>
            <div className="flex gap-8 pb-20">
              <div className="text-4xl text-[#66FCF1]">
                <ion-icon name="medical-outline"></ion-icon>
              </div>
              <div>
                <h3 className="text-2xl font-bold pb-4">Best Quality</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque consequat diam ac.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative group">
              <LazyLoadImage
                src={Image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50">
                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                            <h3>Philosophy</h3>
                            <p className="">Trust pays off</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
