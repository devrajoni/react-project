import TopTitleTwo from '../../../components/TopTitleTwo';
// import Card from "../../../components/Card";

export default function Feature() {
    let heading =[
        {
            titleData:'Key Features.',
            subTitle:'check out its special features',
        }
    ];

    let cardContents = [
        {
            icon:'bar-chart-outline',
            title:'Water Proof',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.​',
        },
        {
            icon:'color-filter-outline',
            title:'UX Designs',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
        },
        {
            icon:'cash-outline',
            title:'Cheap Price',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
        },
      ];

    return(
        <>
        <section className="service-section mt-16 mb-32 md:mt-24 md:px-20 px-12">
            <div className='flex justify-center items-center h-full w-full mb-16'>
                    {heading.map((headings) =>
                        <TopTitleTwo headings={headings} />
                    )}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto mb-12 drop-shadow-md text-white">
                {/* { cardContents.map((cardContent) =>
                    <div className="bg-[#121212] px-12 py-12 border-b-4 border-white hover:border-[#66FCF1] drop-shadow-2xl">
                        <Card cardContent={cardContent}/>
                    </div>
                )} */}
                {cardContents.map((cardContent) =>
                    <div className='bg-[#0B0C10] p-4 text-center'>
                        <div className='font-bold text-4xl pb-4 text-[#66FCF1]'>
                            <ion-icon name={cardContent.icon}></ion-icon>
                        </div>
                        <h1 className='font-bold text-4xl pb-4'>{cardContent.title}</h1>
                        <p className='text-1xl pb-4'>{cardContent.text}</p>
                    </div>
                )}
            </div>
        </section>
        </>
    )
}