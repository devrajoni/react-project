import TopTitleTwo from '../../components/TopTitleTwo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useEffect } from 'react';
import { BASE_URL, IMAGE_URL } from '../../data/baseUrl';
import News1 from "../../asset/blog_latest1.jpg";
import News2 from "../../asset/blog_latest2.jpg";
import News3 from "../../asset/blog_latest3.jpg";
import News4 from "../../asset/blog_latest4.jpg";
import News5 from "../../asset/blog_latest5.jpg";
import News6 from "../../asset/blog_latest6.jpg";

export default function Latest() {
    let [latest, setLatest] = useState([]);

    useEffect(() => {
        const loadData = async() => {
            const url = `${BASE_URL}/latest`;
            try{
                const response = await fetch(url);
                const result = await response.json();
                setLatest(result.data);
            }catch(error){
                console.log(error);
            }
        };
        loadData();
    }, []);

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
                {latest.slice(0, 6).map((data) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
                        <div>
                            <img src={`${IMAGE_URL}${data.image}`} alt='test' className='w-full rounded-t-lg'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                                <h1 className='font-bold text-2xl py-2'>{data.title}</h1>
                                <div className='text-1xl py-6' dangerouslySetInnerHTML={{__html:data.description}} />
                                <button className='btn ring-2 ring-[#66FCF1] hover:opacity-50 p-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='grid grid-cols-12 h-full h-full mb-12 gap-6 px-8'>
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
            </div> */}
        </section>
        </>
    )
}