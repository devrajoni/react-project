import TopTitleTwo from '../../components/TopTitleTwo';
import News1 from "../../asset/news_1.jpg";
import News2 from "../../asset/news_2.jpg";
import News3 from "../../asset/news_3.jpg";

export default function latestNews() {
    let heading =[
        {
            titleData:'Latest News.',
            subTitle:'CHECK OUT SOME OF OUR NEWS',
        }
    ];
    return(
        <>
        <section className="service-section">
            <div className='flex justify-center items-center h-full mt-12 mb-20 md:mt-24 md:px-20 px-12'>
                {heading.map((headings) =>
                    <TopTitleTwo headings={headings} />
                )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 h-full mb-12 gap-6 px-8'>
                <div className='content'>
                    <div>
                        <img src={News1} alt='test' className='w-full rounded-t-lg'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                            <h1 className='font-bold text-2xl py-2'>Could this VR sketching tool be coming of age for designers in the future?</h1>
                            <p className='text-1xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                            <button className='btn ring-2 ring-[#66FCF1] p-4'>Read More</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='content'>
                        <img src={News2} alt='test' className='w-full rounded-t-lg'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                            <h1 className='font-bold text-2xl py-2'>8 Cities That Show You What The Future Will Look Like (Innovative Ideas)</h1>
                            <p className='text-1xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt...</p>
                            <button className='btn ring-2 ring-[#66FCF1] p-4'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <img src={News3} alt='test' className='w-full rounded-t-lg'/>
                    </div>
                    <div className='flex justify-center item-center'>
                        <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                            <h1 className='font-bold text-2xl py-2'>Could this VR sketching tool be coming of age for designers in the future?</h1>
                            <p className='text-1xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                            <button className='btn ring-2 ring-[#66FCF1] p-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}