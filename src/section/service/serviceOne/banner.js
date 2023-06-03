import { useEffect, useState } from "react";
import Nav from "../../../components/Layout/Nav";
import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

export default function Banner() {
  let [search, setSearch] = useState(false);
  let [banner, setBanner] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/service-banner`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setBanner(result.data);
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

  return (
    <>
      <section
        className="header-section relative w-full bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE_URL}${banner?.image})` }}
      >
        <Nav setSearch={setSearch} />

        <div className="flex justify-center items-center w-full h-full absolute text-white">
          <h1 className="font-bold text-6xl md:text-8xl">{banner.title}</h1>
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
