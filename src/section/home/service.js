import TopTitle from '../../components/TopTitle';
import Card from "../../components/Card";

export default function Service() {
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
        <section className="service-section mt-20 md:mt-40 md:px-20 px-12">
            <div className='my-20'>
                {heading.map((headings) =>
                    <TopTitle headings={headings} />
                )}
            </div>
            <div class="grid md:grid-cols-3 grid-cols-1 gap-6 h-80 drop-shadow-md">
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