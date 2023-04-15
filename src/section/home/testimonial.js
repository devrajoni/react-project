import TopTitle from '../../components/TopTitle';
import Icon1 from "../../asset/icon_1.png";
import Icon2 from "../../asset/icon_2.png";
import Icon3 from "../../asset/icon_3.png";
import Icon4 from "../../asset/icon_4.png";
import Icon5 from "../../asset/icon_5.png";
import Icon6 from "../../asset/icon_6.png";
import Icon7 from "../../asset/icon_7.png";
import Test1 from "../../asset/test_1.jpg";
import Test2 from "../../asset/test_2.jpg";
import Test3 from "../../asset/test_3.jpg";

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
            image:Test1,
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:Test2,
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:Test3,
            name:"Jhon Doe",
            designation:"Designation",
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            star:"star",
            image:Test1,
            name:"Jhon Doe",
            designation:"Designation",
        },
    ];

    return(
        <>
        <section className="service-section mt-16 md:mt-28 bg-[#121212]">
            <div className='md:px-20 px-12 text-white  '>
                <div className='content pt-28 pb-16'>
                        {heading.map((headings) =>
                            <TopTitle headings={headings} />
                        )}
                </div>
            </div>
            <div class="grid grid-cols-1  md:grid-cols-4  grid-cols-1 px-12 gap-6 mb-12 w-full text-white">
                {
                    items.map((item) =>
                        <div className='bg-[#0B0C10] px-8 pt-12 gap-6 mb-44 ring-4 ring-[#191919] relative'>
                            <p className=' font-medium text-center'>{item.description}</p>
                            <div className='py-8 mb-28 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]'>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                                <ion-icon name={item.star}></ion-icon>
                            </div>
                            <div className='absolute bottom-0 translate-y-1/2 w-full  left-0'>
                                <div className=' flex justify-center items-center text-white'>
                                    <img src={item.image} className='h-32 w-32 rounded-full mt-16' alt='testimonial1'/>
                                </div>
                                <div className='text-center pt-4 gap-6'>
                                    <h3 className='font-bold text-2xl'>{item.name}</h3>
                                    <p>{item.designation}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='grid grid-rows-7 md:grid-rows-1 grid-flow-col gap-8 md:gap-24 px-12 md:px-40 pt-12'>
                <img src={Icon1} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon2} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon3} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon4} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon5} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon6} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
                <img src={Icon7} alt='icon1' className='h-8 md:h-16 w-8 md:w-16' />
            </div>
            <div className='flex justify-center item-center p-24'>
                <hr className="h-20 w-1 bg-[#66FCF1]"></hr>
            </div>
        </section>
        </>
    )
}