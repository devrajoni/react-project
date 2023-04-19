import TopTitle from "../../components/TopTitle";

export default function Service() {
  let heading = [
    {
      titleData: "About.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  let items = [
    {
      title: "Guide for Email Marketing",
      description:
        "The latest email marketing and marketing automation techniques deployed by brand...",
    },
    {
      title: "Digital Marketing Template",
      description:
        "Business people planning digital marketing strategy Our popular digital marketin...",
    },
    {
      title: "Social Media Cheatsheet",
      description:
        "Social media addiction Free Google and Facebook Paid Media Cheatsheet Review you...",
    },
  ];

  return (
    <>
      <section className="service-section mt-20 md:mt-40 md:px-20 px-12 text-white">
        <div className="my-20">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>
        {/* <div class="grid grid-cols-2 gap-4 h-96 bg-red-900">
          <div className="relative h-full col-span-2 lg:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
              className="absolute"
              alt="about1"
            />
            <div className="content absolute pl-12 pt-72">
              <h3 className="font-bold text-2xl">Team Work</h3>
              <p>Committed and creative</p>
            </div>
          </div>
          <div className=" col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <div className="bg-red-900 w-full">
                <img
                  src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
                  className="h-auto w-full"
                  alt="about1"
                />
              </div>
              <div className="bg-red-900 ">
                <img
                  src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
                  className="h-auto w-full"
                  alt="about1"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <img
              src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/people-working-in-office-e1613655962551.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="">
              <img
                src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/people-working-in-office-1.jpg"
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
            <div className="">
              <img
                src="https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2021/01/office-e1613655942670.jpg"
                // className="h-auto w-full"
                alt="about1"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-12 md:mb-0 w-full bg-slate-900 text-left">
          {items.map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1]">
              <h3 className="text-bold text-2xl pb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
