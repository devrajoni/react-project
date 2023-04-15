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
        <section className="service-section mt-20 mb-32 md:mt-40 md:px-20 px-12">
            <div className='my-20'>
                {heading.map((headings) =>
                    <TopTitle headings={headings} />
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