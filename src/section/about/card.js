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

  // let cardContents = [
  //     {
  //         icon:'stats-chart-outline',
  //         title:'Excellent Design',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     },
  //     {
  //         icon:'pencil-outline',
  //         title:'Brand manual',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     },
  //     {
  //         icon:'people-circle-outline',
  //         title:'SEO',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     },
  //     {
  //         icon:'globe-outline',
  //         title:'Social Media',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     },
  //     {
  //         icon:'triangle-outline',
  //         title:'Website',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     },
  //     {
  //         icon:'stats-chart-outline',
  //         title:'Mobile Apps',
  //         text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
  //     }
  //   ];

  return (
    <>
      <section className="mt-16 md:mt-32 px-6 h-full w-full lg:px-20">
        <div class="grid grid-cols-12 gap-6 drop-shadow-md">
          {card.map((cardContent) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 px-12 py-6">
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
                dangerouslySetInnerHTML={{ __html: cardContent.description }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
