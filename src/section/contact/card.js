import TopTitle from "../../components/TopTitleTwo";
import { useEffect, useState } from "react";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function ContactCard() {
  const [card, setCard] = useState([]);

  useEffect(() => {
      const loadData = async() => {
          const url = `${BASE_URL}/contact-card`;
          try{
              const response = await fetch(url);
              const result = await response.json();
              setCard(result.data);
          }catch(error){
              console.log(error)
          }
      };
      loadData();
  },[]);

  let heading = [
      {
        titleData: "Get in touch with us!",
        subTitle: "LOREM IPSUM DOLOR SIT AMET",
      },
    ];

    return(
        <>
      <section className=" mt-20 md:mt-32 mb-32 text-white bg-[#0B0C10]">
        <div className="py-4 lg:py-16">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>

        <div class="grid grid-cols-12 md:gap-4 px-6 lg:px-20 pt-12 md:mb-0 w-full bg-slate-900 text-left ">
            {card.slice(0, 3).map((data) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1] text-center" key={data.id}>
                <div className="text-[#66FCF1] text-4xl md:text-4xl mb-3">
                    <ion-icon name={data.icon}></ion-icon>
                </div>
                <h3 className="text-bold text-2xl pb-4">{data.title}</h3>
                <div dangerouslySetInnerHTML={{__html:data.description}} />
              </div>
            ))}
            {/* <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1] text-center">
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
            </div> */}
        </div>
      </section>
        </>
    )
}