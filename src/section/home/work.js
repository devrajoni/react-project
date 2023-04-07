import TopTitle from '../../components/TopTitle';
import Button from "../../components/Button";

export default function Work() {
    let data =[
        {
            titleData:'Works.',
            subTitle:"THINGS WE'VE MADE",
        }
    ];

    return(
        <>
        <section className="service-section mt-20 md:mt-32">
            <div className='mt-12 md:mt-16 md:px-20 px-8 text-white  bg-[#121212]'>
                <div className='pt-32 pb-16 flex justify-between'>
                    <div className='content'>
                            {data.map((headings) =>
                                <TopTitle headings={headings} />
                            )}
                    </div>
                    <Button name="View All" />
                </div>
            </div>

            <div class="grid grid-rows-1 grid-flow-col gap-0 h-80 w-full bg-slate-900">
                <div className=' w-80 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-56 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
                <div className=' w-80 h-full hover:w-96 relative group'>
                    <img src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4" className="h-full absolute" alt="work1" />
                    <div className='absolute md:flex md:items-center justify-center mb-0 text-white px-32 top-40 opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-transform duration-300 ease-in '>
                        <h3 className='text-2xl font-bold'>Ui Design</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}