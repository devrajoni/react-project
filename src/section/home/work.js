// import Work1 from "../../asset/work_1.jpg";
// import Work2 from "../../asset/work_2.jpg";
// import Work3 from "../../asset/work_3.jpg";
// import Work4 from "../../asset/work_4.jpg";
// import Work5 from "../../asset/work_5.jpg";
// import Work6 from "../../asset/work_6.jpg";
import Button from "../../components/Button";
import TopTitle from "../../components/TopTitle";

export default function Work() {
  let data = [
    {
      titleData: "Works.",
      subTitle: "Flagship projects",
    },
  ];

  return (
    <>
      <section className="mt-16 md:mt-28">
        <div className="mt-12 md:mt-16 md:px-20 px-8 text-white  bg-[#121212]">
          <div className="pt-28 pb-16 flex justify-between">
            <div className="content">
              {data.map((headings) => (
                <TopTitle headings={headings} />
              ))}
            </div>
            <Button name="View All" />
          </div>
        </div>

        {/* <div class="flex h-80 w-full">
          <div className="h-full relative group">
            <img src={Work1} className="h-full absolute" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
          <div className="h-full relative group">
            <img src={Work2} className="h-full absolute inset-0" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
          <div className="h-full relative group">
            <img src={Work3} className="h-full absolute inset-0" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
          <div className="h-full relative group">
            <img src={Work4} className="h-full absolute inset-0" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center mb-0 text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
          <div className="h-full relative group">
            <img src={Work5} className="h-full absolute inset-0" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center mb-0 text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
          <div className="h-full relative group">
            <img src={Work6} className="h-full absolute inset-0" alt="work1" />
            <div className="absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in ">
              <h3 className="text-2xl font-bold">Ui Design</h3>
            </div>
          </div>
        </div> */}
        <div className="flex">
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2020/12/adam-birkett-QRWAdBCqysc-unsplash2-2.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2020/12/kilyan-sockalingum-LQf3dro3y5E-unsplash2.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2020/12/kilyan-sockalingum-FAlefSetxdQ-unsplash2.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2021/02/wesson-wang-y0_vFxOHayg-unsplash_8-e1612527130994.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2020/12/petri-r-gehzL37x6zY-unsplash2.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="item">
            <img
              src="https://templatekit.jegtheme.com/creative1/wp-content/uploads/sites/43/2021/02/harun-asrori-YaVzA1txTRQ-unsplash_4-e1612527269350.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
