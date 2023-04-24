import TopTitle from "../../components/TopTitleTwo";

export default function FooterCard() {
    let heading = [
        {
          titleData: "Get in touch with us!",
          subTitle: "LOREM IPSUM DOLOR SIT AMET",
        },
      ];

    return(
        <>
      <section className="service-section mt-20 md:mt-32 md:px-20 px-12 mb-32 text-white bg-[#0B0C10]">
        <div className="my-16">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>

        <div class="grid grid-cols-12 gap-4 pt-12 md:mb-0 w-full bg-slate-900 text-left ">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1] text-center">
                <div className="text-[#66FCF1] text-4xl md:text-4xl mb-3">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
               <h3 className="text-bold text-2xl pb-4">PHONE</h3>
               <p>+1 234 567 890</p>
               <p>+1 234 567 890</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1] text-center">
                <div className="text-[#66FCF1] text-4xl md:text-4xl mb-3">
                    <ion-icon name="location-outline"></ion-icon>
                </div>
               <h3 className="text-bold text-2xl pb-4">ADDRESS</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 text-center">
                <div className="text-[#66FCF1] text-4xl md:text-4xl mb-3">
                    <ion-icon name="mail-open-outline"></ion-icon>
                </div>
               <h3 className="text-bold text-2xl pb-4">EMAIL</h3>
               <p>anymail@mail.com</p>
               <p>officialmail@mail.com</p>
            </div>
        </div>
      </section>
        </>
    )
}