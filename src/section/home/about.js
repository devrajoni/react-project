import TopTitle from '../../components/TopTitle';

export default function Service() {
    let heading =[
        {
            titleData:'About.',
            subTitle:'WE ARE MORE THAN DIGITAL AGENCY',
        }
    ];

    let items =[
        {
            title:"Who we are",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            title:"Our philosophy",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            title:"How we work",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ]

    return(
        <>
        <section className="service-section mt-20 md:mt-40 md:px-20 px-12 text-white">
            <div className='my-20'>
                {heading.map((headings) =>
                    <TopTitle headings={headings} />
                )}
            </div>
            <div class="grid grid-cols-2 gap-4 h-96 bg-red-900">
                <div className='relative h-full col-span-2 lg:col-span-1'>
                    <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' className='absolute' alt='about1'/>
                    <div className='content absolute pl-12 pt-72'>
                        <h3 className='font-bold text-2xl'>Team Work</h3>
                        <p>Committed and creative</p>
                    </div>
                </div>
                {/* <div className=' col-span-2 lg:col-span-1'>
                    <div className='flex flex-col'>
                        <div className='bg-red-900 w-full'>
                        <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' className='h-auto w-full' alt='about1'/>
                        </div>
                        <div className='bg-red-900 '>
                        <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' className='h-auto w-full' alt='about1'/>

                        </div>
                    </div>
                </div> */}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:mb-0 w-full bg-slate-900 text-left">
                {
                    items.map((item) =>
                        <div className='bg-[#0B0C10] p-12 md:border-r-4 border-[#66FCF1]'>
                            <h3 className='text-bold text-2xl pb-4'>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                }
            </div>
        </section>
        </>
    )
}