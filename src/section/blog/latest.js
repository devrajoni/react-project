import TopTitleTwo from '../../components/TopTitleTwo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import News1 from "../../asset/blog_latest1.jpg";
import News2 from "../../asset/blog_latest2.jpg";
import News3 from "../../asset/blog_latest3.jpg";
import News4 from "../../asset/blog_latest4.jpg";
import News5 from "../../asset/blog_latest5.jpg";
import News6 from "../../asset/blog_latest6.jpg";

export default function latestNews() {
    let heading =[
        {
            titleData:'Check our latest news.',
            subTitle:'CHECK OUT SOME OF OUR NEWS',
        }
    ];
    return(
        <>
        <section className="blog-section">
            <div className='flex justify-center items-center h-full mt-12 mb-20 md:mt-24 px-6 lg:px-20'>
                {heading.map((headings) =>
                    <TopTitleTwo headings={headings} />
                )}
            </div>
            <div className='grid grid-cols-12 h-full mb-12 gap-6 px-8'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
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

                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
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
                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
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
            <div className='grid grid-cols-12 h-full h-full mb-12 gap-6 px-8'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
                    <div>
                        <LazyLoadImage src={News4} alt='test' className='w-full rounded-t-lg'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                            <h1 className='font-bold text-2xl py-2'>Could this VR sketching tool be coming of age for designers in the future?</h1>
                            <p className='text-1xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....</p>
                            <button className='btn ring-2 ring-[#66FCF1] p-4'>Read More</button>
                        </div>
                    </div>
                </div>

                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
                    <div>
                        <img src={News5} alt='test' className='w-full rounded-t-lg'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                            <h1 className='font-bold text-2xl py-2'>8 Cities That Show You What The Future Will Look Like (Innovative Ideas)</h1>
                            <p className='text-1xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt...</p>
                            <button className='btn ring-2 ring-[#66FCF1] p-4'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
                    <div>
                        <img src={News6} alt='test' className='w-full rounded-t-lg'/>
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