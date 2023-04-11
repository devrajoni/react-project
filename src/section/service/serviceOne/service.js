import TopTitleTwo from '../../../components/TopTitleTwo';
import Card from "../../../components/Card";

export default function Services() {
    let heading =[
        {
            titleData:'Services.',
            subTitle:'OUR SERVICES FOR CLIENTS',
        }
    ];

    let cardContents = [
        {
            icon:'stats-chart-outline',
            title:'Digital Strategy',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.​',
        },
        {
            icon:'pencil-outline',
            title:'UX Designs',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
        },
        {
            icon:'people-circle-outline',
            title:'UI Designs',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
        },
        {
            icon:'globe-outline',
            title:'Social Media',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.​',
        },
        {
            icon:'triangle-outline',
            title:'Design Concept',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.',
        },
        {
            icon:'stats-chart-outline',
            title:'Media Pairing',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.​',
        }
      ];

    return(
        <>
        <section className="service-section mt-16 mb-32 md:mt-24 md:px-20 px-12">
            <div className='flex justify-center items-center h-full w-full mb-16'>
                    {heading.map((headings) =>
                        <TopTitleTwo headings={headings} />
                    )}
            </div>
            <div class="grid md:grid-cols-3 grid-cols-1 gap-6 h-auto mb-12 drop-shadow-md">
                { cardContents.map((cardContent) =>
                    <div className="bg-[#121212] px-12 py-12 border-b-4 border-white hover:border-[#66FCF1] drop-shadow-2xl">
                        <Card cardContent={cardContent}/>
                    </div>
                )}
            </div>
        </section>
        </>
    )
}