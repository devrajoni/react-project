import TopTitleTwo from '../../../components/TopTitleTwo';
import Image from '../../../asset/service_work_1.jpg';
import Image1 from '../../../asset/service_work_2.jpg';
import Image2 from '../../../asset/service_work_3.jpg';
import Image3 from '../../../asset/service_work_4.jpg';
import Image4 from '../../../asset/service_work_5.jpg';
import Image5 from '../../../asset/service_work_6.jpg';

export default function Work() {
    let heading =[
        {
            titleData:'Our Works.',
            subTitle:'See all our works',
        }
    ];


    return(
        <>
        <section className="h-full w-full bg-[#121212]">
            <div className='px-12 md:px-20'>
                <div className='flex justify-center items-center'>
                    {heading.map((headings) =>
                        <TopTitleTwo headings={headings} />
                    )}
                </div>
                <div className='grid grid-cols-3 mt-16 gap-6'>
                    <div>
                        <img src={Image} alt='work_image'/>
                    </div>
                    <div>
                        <img src={Image1} alt='work_image'/>
                    </div>
                    <div>
                        <img src={Image2} alt='work_image'/>
                    </div>
                    <div>
                        <img src={Image3} alt='work_image'/>
                    </div>
                    <div>
                        <img src={Image4} alt='work_image'/>
                    </div>
                    <div >
                        <img src={Image5} alt='work_image'/>
                    </div>
                </div>
                {/* <div className='grid grid-cols-3 gap-8'>

                </div> */}
            </div>

        </section>
        </>
    )
}