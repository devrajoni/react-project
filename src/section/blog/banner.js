import { useEffect, useState } from "react";
import Nav from "../../components/Layout/Nav";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Banner() {
  let [search, setSearch] = useState(false);
  let [banner, setbanner] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const URL = `${BASE_URL}/blog-banner`;
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

  const bannerImage = banner.image ? `${IMAGE_URL}${banner?.image}` : "";
  const bannerTitle = banner.title ? banner.title : "";

  return (
    <>
      <section
        className="h-[400px] lg:h-[600px] relative w-full bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <Nav setSearch={setSearch} />

        <div className="flex justify-center items-center w-full h-full absolute text-white">
          <h1 className="font-bold text-6xl md:text-8xl">{bannerTitle}</h1>
        </div>
      </section>
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
