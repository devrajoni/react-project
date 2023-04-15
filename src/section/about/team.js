
import TopTitle from "../../components/TopTitle";
import Image1 from "../../asset/about_team1.jpg";
import Image2 from "../../asset/about_team2.jpg";
import Image3 from "../../asset/about_team3.jpg";
import Image4 from "../../asset/about_team4.jpg";
import Image5 from "../../asset/about_team5.jpg";


export default function Team() {
  let data = [
    {
      titleData: "Meet our team.",
      subTitle: "THE BEST PEOPLE TO SUPPORT YOUR PROJECT",
    },
  ];

  return (
    <>
      <section className="mt-20 md:mt-40">
        <div className="">
            <div className=" md:px-20 px-8 text-white py-20 bg-[#121212]">
                <div className="content">
                {data.map((headings) => (
                    <TopTitle headings={headings} />
                ))}
                </div>
            </div>
            <div className="flex gap-4 pb-28">
            <div className="">
                <img
                src={Image1}
                alt="about"
                className="w-full h-full"
                />
            </div>
            <div className="">
                <img
                src={Image2}
                alt="about"
                className="w-full h-full"
                />
            </div>
            <div className="">
                <img
                src={Image3}
                alt="about"
                className="w-full h-full"
                />
            </div>
            <div className="">
                <img
                src={Image4}
                alt="about"
                className="w-full h-full"
                />
            </div>
            <div className="">
                <img
                src={Image5}
                alt="about"
                className="w-full h-full"
                />
            </div>
            </div>
        </div>
      </section>
    </>
  );
}