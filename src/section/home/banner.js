import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Nav from "../../components/Layout/Nav";
// import Image1 from "../../asset/home_banner1.jpg";
// import Image2 from "../../asset/home_banner2.jpg";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Banner() {
  let [search, setSearch] = useState(false);
  let [banner, setbanner] = useState({});

  useEffect(() => {
    if (search) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [search]);

  useEffect(() => {
    const loadData = async () => {
      const URL = `${BASE_URL}/home-banner`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setbanner(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);
  // console.log(banner.image)


  let cardContents = [
    {
      icon: "navigate-outline",
      name: "We Provide Full-Service.",
      short_description: "We become fully immersed into our client business and industry, acquiring the same vision to accomplish goals together.​",
    },
    {
      icon: "snow-outline",
      name: "We deliver solutions.",
      short_description: "We love to innovate and produce new ideas, to grow your business and save your time. Always proud to be able to exceed your expectations .",
    },
    {
      icon: "bonfire-outline",
      name: "We Build Brands.",
      short_description: "We design the brand; we turn the brand into an experience; and we communicate the brand’s story. We make brands matter.",
    },
  ];

  return (
    <>
      <section
        className="header-section relative w-full bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE_URL}${banner?.image})` }}
      >
        <Nav setSearch={setSearch} />

        <div className="text-left absolute py-60 w-full text-white px-6 md:px-40">
          <h5 className="text-[#66FCF1] text-uppercase whitespace-pre-wrap pb-3">
            {banner.sub_title}
          </h5>
          <h1 className="font-bold text-5xl pb-10 w-1/2">
            {banner.title}
          </h1>
          <Button name="3D Portfolio" />
        </div>
      </section>
      <div class="grid grid-cols-12 gap-6 px-6 lg:px-20 mb-32 h-auto ">
        {cardContents.map((cardContent) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#121212] px-12 py-12 hover:ring-4 ring-[#66FCF1]">
            <Card cardContent={cardContent} />
          </div>
        ))}
      </div>

      {search ? (
        <div className="fixed z-50 inset-0 bg-slate-900/70">
          <div className="flex justify-end mt-6 mr-6">
            <button
              onClick={() => setSearch(false)}
              className="text-white bg-black border-2 h-8 w-8 rounded-full top-16 right-16 z-[999]"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="max-w-2xl w-full">
              <input
                type="search"
                placeholder="search"
                className="w-full px-5 py-4 bg-transparent rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
