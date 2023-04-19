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
            title:'UX design',
            text:'We deliver intuitive and engaging experience to the end-users of your application. SKY Digital applies its vast technology expertise and domain knowledge to develop landmark applications.',
        },
        {
            icon:'pencil-outline',
            title:'Brand manual',
            text:'We make brands fly! We grow your business by combining the best in design, marketing and digital disciplines by creating meaningful brand experiences. Think of us as ‘integral’ to your strategy from brand design, development & growth.',
        },
        {
            icon:'people-circle-outline',
            title:'SEO',
            text:'We increase your revenues and userbase with our award-winning SEO services including Search Engine Optimization, Pay-Per-Click, Advertising · Mobile Optimization as Clutch 2021 Top Internet Marketing Company.',
        },
        {
            icon:'globe-outline',
            title:'Social Media',
            text:'We make sure your online website is meeting all the needs of your shoppers. We provide the best ecommerce development services that will help you tap into market trends, leverage advanced technologies, and infuse creativity into your process.​',
        },
        {
            icon:'triangle-outline',
            title:'Website',
            text:'Our experienced web development teams deliver websites, web portals, and web-based solutions and applications. We are one of the a few companies that specialize in developing software as a service (saas) platforms using the latest technologies in web 3.0.',
        },
        {
            icon:'stats-chart-outline',
            title:'Mobile Apps',
            text:'We develop both Hybrid & Native mobile Apps for IOS & Android Mobile & Smart devices. We have successfully completed over 300+ mobile projects and this allowed us to gain Experience in a variety of latest mobile technologies including Augmented and Virtual Reality and Artificial Intelligence.​',
        }
      ];

    return(
        <>
        <section className="service-section mt-16 mb-32 md:mt-24 px-12 md:px-20">
            <div className='flex justify-center items-center h-full w-full mb-16'>
                    {heading.map((headings) =>
                        <TopTitleTwo headings={headings} />
                    )}
            </div>
            <div class="grid grid-cols-12 gap-6 h-auto mb-12 drop-shadow-md">
                { cardContents.map((cardContent) =>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#121212] px-12 py-12 border-b-4 border-white hover:border-[#66FCF1] drop-shadow-2xl">
                        <Card cardContent={cardContent}/>
                    </div>
                )}
            </div>
        </section>
        </>
    )
}