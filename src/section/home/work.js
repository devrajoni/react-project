import TopTitle from '../../components/TopTitle';
import Button from "../../components/Button";
import Work1 from "../../asset/work_1.jpg";
import Work2 from "../../asset/work_2.jpg";
import Work3 from "../../asset/work_3.jpg";
import Work4 from "../../asset/work_4.jpg";
import Work5 from "../../asset/work_5.jpg";
import Work6 from "../../asset/work_6.jpg";

export default function Work() {
    let data =[
        {
            titleData:'Works.',
            subTitle:"THINGS WE'VE MADE",
        }
    ];

    return(
        <>
        <section className="service-section mt-16 md:mt-28">
            <div className='mt-12 md:mt-16 md:px-20 px-8 text-white  bg-[#121212]'>
                <div className='pt-28 pb-16 flex justify-between'>
                    <div className='content'>
                            {data.map((headings) =>
                                <TopTitle headings={headings} />
                            )}
                    </div>
                    <Button name="View All" />
                </div>
            </div>

            <div class="grid grid-rows-1 grid-flow-col gap-0 h-80 w-full bg-slate-900">
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src={Work1} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src={Work2} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src={Work3} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src={Work4} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src={Work5} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-80 h-full hover:w-96 relative group'>
                    <img src={Work6} className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center text-white px-28 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}