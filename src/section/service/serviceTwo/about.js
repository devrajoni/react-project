import serviceAbout from "../../../asset/service_about.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Test1 from "../../../asset/test_1.jpg";
import Test2 from "../../../asset/test_2.jpg";
import Test3 from "../../../asset/test_3.jpg";
import { useState, useEffect } from 'react';
import { BASE_URL, IMAGE_URL } from '../../../data/baseUrl';

export default function About() {
    let [testimonial, setTestimonial] = useState([]);

    // let items =[
    //     {
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //         star:"star",
    //         image:Test1,
    //         name:"Jhon Doe",
    //         designation:"Designation",
    //     },
    //     {
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //         star:"star",
    //         image:Test2,
    //         name:"Jhon Doe",
    //         designation:"Designation",
    //     },
    //     {
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //         star:"star",
    //         image:Test3,
    //         name:"Jhon Doe",
    //         designation:"Designation",
    //     },
    //     {
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //         star:"star",
    //         image:Test1,
    //         name:"Jhon Doe",
    //         designation:"Designation",
    //     },
    // ];

    useEffect(() => {
        const loadData = async() => {
            const url = `${BASE_URL}/testimonial`;
            try{
                const response = await fetch(url);
                const result = await response.json();
                setTestimonial(result.data);
            }catch(error){
                console.log(error);
            }
        };
        loadData()
    }, []);

    return(
        <>
        <section className="h-full px-6 lg:px-20  pb-8 text-white relative w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${serviceAbout})` }}>
            <div className="py-12">
                <h1 className="flex justify-center w-full text-white font-bold text-4xl">What people say about us</h1>
            </div>
            <div class="grid grid-cols-12 gap-6 w-full text-white">
                {testimonial.map((item) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-3 bg-[#0B0C10] px-8 pt-12 gap-6 mb-44 ring-4 ring-[#191919] relative' key={item.id}>
                        <div className=' font-medium text-center'  dangerouslySetInnerHTML={{__html:item.description}} />
                        <div className='py-8 mb-28 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]'>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        <div className='absolute bottom-0 translate-y-1/2 w-full  left-0'>
                            <div className=' flex justify-center items-center text-white'>
                            <LazyLoadImage src={`${IMAGE_URL}${item.image}`} className='h-32 w-32 rounded-full mt-16' alt='testimonial1'/>
                            </div>
                            <div className='text-center pt-4 gap-6'>
                                <h3 className='font-bold text-2xl'>{item.name}</h3>
                                <div>{item.designation}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}