import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        <div className="relative">
            <div className="px-6 lg:px-20 text-white py-20 bg-[#121212]">
                <div className="content">
                {data.map((headings) => (
                    <TopTitle headings={headings} />
                ))}
                </div>
            </div>
            <div className="md:flex gap-4 pb-28">
              <div className="relative group">
                  <LazyLoadImage
                  src={Image1}
                  alt="about"
                  className="w-full h-full"
                  />
                  <div className="absolute group flex items-center justify-center inset-0 bg-black/50 group-hover:bg-black/0 ">
                    <div className="text-white opacity-0 translate-y-24 md:translate-y-12 lg:translate-y-24 invisible group-hover:translate-y-8 transition-transform duration-300 ease-in group-hover:visible group-hover:opacity-100 ">
                      <p className="flex text-1xl md:text-2xl justify-center pb-2">John Doe</p>
                      <p className="flex md:text-1xl justify-center pb-8">Designer</p>
                      <div className="flex gap-4 md:gap-8 text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </div>
                    </div>
                  </div>
              </div>
                <div
                  className="relative group"

                >
                  <LazyLoadImage src={Image2} alt="image1" />
                  <div className="absolute group flex items-center justify-center inset-0 bg-black/50 group-hover:bg-black/0 ">
                    <div className="text-white opacity-0 translate-y-24 md:translate-y-12 lg:translate-y-24 invisible group-hover:translate-y-8 transition-transform duration-300 ease-in group-hover:visible group-hover:opacity-100 ">
                      <h3 className="flex text-2xl justify-center pb-2">John Doe</h3>
                      <p className="flex text-1xl justify-center pb-8">Designer</p>
                      <div className="flex gap-8 text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="relative group">
                  <LazyLoadImage
                  src={Image3}
                  alt="about"
                  className="w-full h-full"
                  />
                  <div className="absolute group flex items-center justify-center inset-0 bg-black/50 group-hover:bg-black/0 ">
                    <div className="text-white opacity-0 translate-y-24 md:translate-y-12 lg:translate-y-24 invisible group-hover:translate-y-8 transition-transform duration-300 ease-in group-hover:visible group-hover:opacity-100 ">
                      <h3 className="flex text-2xl justify-center pb-2">John Doe</h3>
                      <p className="flex text-1xl justify-center pb-8">Designer</p>
                      <div className="flex gap-8 text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="relative group">
                  <LazyLoadImage
                  src={Image4}
                  alt="about"
                  className="w-full h-full"
                  />
                  <div className="absolute group flex items-center justify-center inset-0 bg-black/50 group-hover:bg-black/0 ">
                    <div className="text-white opacity-0 translate-y-24 md:translate-y-12 lg:translate-y-24 invisible group-hover:translate-y-8 transition-transform duration-300 ease-in group-hover:visible group-hover:opacity-100 ">
                      <h3 className="flex text-2xl justify-center pb-2">John Doe</h3>
                      <p className="flex text-1xl justify-center pb-8">Designer</p>
                      <div className="flex gap-8 text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="relative group">
                  <LazyLoadImage
                  src={Image5}
                  alt="about"
                  className="w-full h-full"
                  />
                  <div className="absolute group flex items-center justify-center inset-0 bg-black/50 group-hover:bg-black/0 ">
                    <div className="text-white opacity-0 translate-y-24 md:translate-y-12 lg:translate-y-24 invisible group-hover:translate-y-8 transition-transform duration-300 ease-in group-hover:visible group-hover:opacity-100 ">
                      <h3 className="flex text-2xl justify-center pb-2">John Doe</h3>
                      <p className="flex text-1xl justify-center pb-8">Designer</p>
                      <div className="flex gap-8 text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}