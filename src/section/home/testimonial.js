import TopTitle from '../../components/TopTitle';

export default function Service() {
    let heading =[
        {
            titleData:'Testimonials.',
            subTitle:'WE ARE MORE THAN DIGITAL AGENCY',
        }
    ];

    let items =[
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:"https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:"https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:"https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:"https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
            name:"Jhon Doe",
            designation:"Designation",
        },
    ];

    return(
        <>
        <section className="service-section mt-20 md:mt-32 ">
            <div className='mt-12 md:mt-16 md:px-20 px-12 text-white  bg-[#121212]'>
                <div className='content pt-32 pb-16'>
                        {heading.map((headings) =>
                            <TopTitle headings={headings} />
                        )}
                </div>
            </div>
            <div class="grid grid-cols-1  md:grid-cols-4  grid-cols-1 px-12 gap-6 mb-12 w-full bg-slate-900 text-white">
                {
                    items.map((item) =>
                        <div className='bg-[#0B0C10] px-8 pt-12 gap-6 mb:56 ring-4 h-96 ring-[#191919]'>
                            <p className=' text-2xl text-center'>{item.description}</p>
                            <div className='py-8 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]'>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                            </div>
                            <div className=' flex justify-center items-center text-white'>
                                <img src={item.image} className='h-32 w-32 rounded-full' alt='testimonial1'/>
                            </div>
                            <div className='text-center pt-4 mb-12 gap-6'>
                                <h3 className='font-bold text-2xl'>{item.name}</h3>
                                <p>{item.designation}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
        <div className='h-96'>

        </div>
        </>
    )
}