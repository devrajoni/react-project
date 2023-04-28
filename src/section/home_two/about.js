import TopTitle from "../../components/TopTitle";
import AboutOne from "../../asset/home_two_about1.jpg";
import AboutTwo from "../../asset/home_two_about2.jpg";
import AboutThree from "../../asset/home_two_about3.jpg";
import AboutFour from "../../asset/home_two_about4.jpg";

export default function About() {
  let heading = [
    {
      titleData: "About.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  return (
    <>
      <section className="text-white">
        <div className="my-20 px-12 md:px-20 ">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="relative group">
                    <img
                    src={AboutOne}
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

                <div className="relative group pt-4">
                    <img
                    src={AboutTwo}
                    alt=""
                    className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50">
                        {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                            <h3>Branding</h3>
                            <p className="">Good branding</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4">
                <div className="relative h-1/2 group">
                    <img
                    src={AboutThree}
                    alt=""
                    className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50">
                        {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                            <h3>Equipment</h3>
                            <p className="">This is what we use</p>
                        </div> */}
                    </div>
                </div>

                <div className="relative h-1/2 group pt-4">
                    <img
                    src={AboutFour}
                    alt=""
                    className="h-full w-full object-cover"
                    />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50">
                        {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                            <h3>Office</h3>
                            <p className="">Somewhere on earth</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex md:items-center">
                <div className="md:text-left w-96 pl-4">
                    <h3 className="font-bold text-4xl mb-4">Our philosophy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat diam ac vulputate convallis. Quisque sit amet pretium nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut aliquam arcu vel augue lobortis tempor. Cras ultrices tortor quam, et consequat est scelerisque quis.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
