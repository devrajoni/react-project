import { LazyLoadImage } from "react-lazy-load-image-component";
import TopTitleTwo from "../../../components/TopTitleTwo";
import { IMAGE_URL } from "../../../data/baseUrl";
// import Card from "../../../components/Card";

export default function Feature({ data = [] }) {
  // const [card, setCard] = useState([]);

  // useEffect(() => {
  //   const loadData = async() => {
  //     const url = `${BASE_URL}/feature`;
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       setCard(result.data);
  //     } catch(error) {
  //       console.log(error);
  //     }
  //   };
  //   loadData();
  // }, []);
  // console.log(card);
  let heading = [
    {
      titleData: "Key Features.",
      subTitle: "check out its special features",
    },
  ];
  console.log(data);

  // let cardContents = [
  //     {
  //         icon:'bar-chart-outline',
  //         title:'Water Proof',
  //         text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.​',
  //     },
  //     {
  //         icon:'color-filter-outline',
  //         title:'UX Designs',
  //         text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
  //     },
  //     {
  //         icon:'cash-outline',
  //         title:'Cheap Price',
  //         text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
  //     },
  //   ];

  return (
    <>
      <section className=" mt-16 mb-32  px-6 md:mt-24 lg:px-20">
        <div className="flex justify-center items-center h-full w-full mb-16">
          {heading.map((headings) => (
            <TopTitleTwo headings={headings} />
          ))}
        </div>
        <div class="grid grid-cols-12 gap-6 h-auto mb-12 drop-shadow-md text-white">
          {data[0]?.feature?.map((cardContent) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#0B0C10] p-4 text-center"
              key={cardContent.id}
            >
              <div className="flex item-center justify-center pb-4 text-[#66FCF1]">
                <LazyLoadImage
                  src={`${IMAGE_URL}${cardContent.icon}`}
                  alt="test"
                  className="w-auto h-8 object-cover object-center"
                />
              </div>
              <h1 className="font-bold text-4xl pb-4">{cardContent.title}</h1>
              <p
                className="text-1xl pb-4"
                dangerouslySetInnerHTML={{ __html: cardContent.description }}
              ></p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
