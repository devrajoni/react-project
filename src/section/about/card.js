import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function Card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/about-card`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setCard(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <section className="my-32 h-full w-full container">
        <div class="grid grid-cols-12 gap-6 drop-shadow-md">
          {card.slice(0, 6).map((cardContent) => (
            <div className="relative col-span-12 md:col-span-6 lg:col-span-4 border border-[#66FCF1] rounded-md border-opacity-20 drop-shadow-xl p-6">
              <div
                className="text-[#66FCF1] text-4xl mb-8 md:text-4xl"
                key={cardContent.id}
              >
                <LazyLoadImage
                  src={`${IMAGE_URL}${cardContent.icon}`}
                  alt="test"
                  className="w-auto h-8 object-cover object-center"
                />
              </div>
              <h1 className="font-bold text-2xl pb-4 text-white">
                {cardContent.title}
              </h1>
              <div
                className="font-medium text-white"
                dangerouslySetInnerHTML={{
                  __html: cardContent.description,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
