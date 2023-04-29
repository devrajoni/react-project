import { useEffect, useState } from "react";
import Nav from "../../../components/Layout/Nav";
// import Image1 from "../../asset/home_banner1.jpg";
import Image2 from "../../../asset/single_service3.jpg";

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
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image2})` }}
      >
        {/* <img src={Image2} className="w-full bg-cover h-full" alt="banner" /> */}
        <Nav setSearch={setSearch} />

        <div className="text-left px-6 py-60 text-white px-6 lg:px-40">
          <h1 className="font-bold text-7xl pb-6">Activity Tracker.</h1>
          <h5 className="text-[#66FCF1] text-uppercase whitespace-pre-wrap pb-3">
            CREATIVE MIND, CREATIVE WORKS.
          </h5>
          <p className="w-60 md:w-96 text-1xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
            arcu luctus, pellentesque lorem ac, pharetra sapien.
          </p>
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
