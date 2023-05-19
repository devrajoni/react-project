import TopTitleTwo from '../../components/TopTitleTwo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import News1 from "../../asset/news_1.jpg";
import News2 from "../../asset/news_2.jpg";
import News3 from "../../asset/news_3.jpg";
import { useState, useEffect } from 'react';
import { BASE_URL, IMAGE_URL } from '../../data/baseUrl';
import { Link } from 'react-router-dom';

export default function LatestNews() {
    let [latest, setLatest] = useState([]);

    let heading =[
        {
            titleData:'Latest News.',
            subTitle:'CHECK OUT SOME OF OUR NEWS',
        }
    ];

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
        loadData()
    }, []);
    console.log(latest);

    return(
        <>
        <section className="service-section">
            <div className='flex justify-center items-center h-full mt-12 px-6 mb-20 md:mt-24 md:px-20'>
                {heading.map((headings) =>
                    <TopTitleTwo headings={headings} />
                )}
            </div>
            <div className='grid grid-cols-12 h-full mb-12 gap-6 px-8'>
                {latest.slice(0,3).map((data) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 content'>
                        <div>
                            <LazyLoadImage src={`${IMAGE_URL}${data.image}`} alt='test' className='w-full rounded-t-lg'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='bg-[#0B0C10] border-x-4 border-b-4 border-[#191919] drop-shadow-md text-white p-8'>
                                <h1 className='font-bold text-2xl py-2'>{data.title}</h1>
                                <div className='text-1xl py-6' dangerouslySetInnerHTML={{__html:data.description}} />
                                <Link to='/blog'><button className='btn ring-2 ring-[#66FCF1] p-4 hover:opacity-50'>Read More</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}