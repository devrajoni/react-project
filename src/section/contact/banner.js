import { useEffect, useState } from "react";
import Nav from "../../components/Layout/Nav";
import Image2 from "../../asset/contact_banner.jpg";

export default function Banner() {
  let [search, setSearch] = useState(false);
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
      <section className="header-section relative w-full bg-slate-900">
        <img
          src={Image2}
          className="w-full bg-cover h-full absolute"
          alt="banner"
        />
        <Nav setSearch={setSearch} />

        <div className="flex justify-center items-center w-full h-full absolute text-white">
          <h1 className="font-bold text-6xl md:text-8xl">Contact Us.</h1>
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