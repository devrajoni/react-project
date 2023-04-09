import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
// import Image1 from "../../asset/home_banner1.jpg";
import Image2 from "../../asset/home_banner2.jpg";


export default function Banner() {
    let [search, setSearch] = useState(false);
  useEffect(() => {
    if (search) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [search])

  let cardContents = [
    {
        icon:'navigate-outline',
        title:'Future Concept.',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​',
    },
    {
        icon:'snow-outline',
        title:'The Big Ideas.',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus',
    },
    {
        icon:'bonfire-outline',
        title:'Creative Solutions.',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​',
    }
  ]

  return (
    <>
      <section className="header-section relative w-full bg-slate-900">
          {/* <img
      srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
      sizes="(max-width: 600px) 480px,
            800px"
      src={Image1}
      alt="Elva dressed as a fairy"  className="w-full bg-cover h-full absolute mix-blend-overlay" /> */}

        <img
          src={Image2}
          className="w-full bg-cover h-full absolute"
          alt="banner"
        />
        <Nav setSearch={setSearch} />

        <div className="text-left fixed py-60 text-white px-20 md:px-40 absolute">
          <h5 className="text-[#66FCF1] text-uppercase whitespace-pre-wrap pb-3">
            CREATIVE MIND, CREATIVE WORKS.
          </h5>
          <h1 className="font-bold text-4xl pb-10">We are digital agency.</h1>
          <Button name="Getting Started"/>
        </div>
      </section>
        <div class="grid md:grid-cols-3 grid-cols-1 mb-12 gap-6 px-20 mb-32 ">
        { cardContents.map((cardContent) =>
            <div className="bg-[#121212] px-12 py-12 drop-shadow-2xl hover:ring-4 ring-[#66FCF1]">
                <Card cardContent={cardContent}/>
            </div>
        )}
        </div>

      {search ? <div className="fixed z-50 inset-0 bg-slate-900/70">
        <div className="flex justify-end mt-6 mr-6">
            <button onClick={() => setSearch(false)} className="text-white bg-black border-2 h-8 w-8 rounded-full top-16 right-16 z-[999]"><ion-icon name="close-outline"></ion-icon></button>
        </div>
          <div className="flex justify-center items-center h-full">
            <div className="max-w-2xl w-full"><input type="search" placeholder="search" className="w-full px-5 py-4 bg-transparent rounded-full border-2 border-white"/>
          </div>
          </div>
        </div>: null}
    </>
  );
}