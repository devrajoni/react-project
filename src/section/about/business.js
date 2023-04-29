import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from '../../asset/about_business.jpg';
import Button from "../../components/Button";
// import Card from "../../../components/Card";

export default function Business() {

    return(
        <>
        <section className=" px-6 lg:px-20 gap-y-4 mt-20 md:mt-40">
            <div>
                <div class="grid grid-cols-12 sm:gap-y-8 md:gap-12 h-auto text-white">
                    <div className='col-span-12 md:col-span-12 lg:col-span-6'>
                        <LazyLoadImage src={Image} alt='activity'/>
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-6 mt-12 lg:mt-0 text-left'>
                        <h3 className='font-bold sm:text-2xl md:text-2xl lg:text-6xl'>Best Solutions for Your Business</h3>
                        <p className='text-1xl py-8 md:py-8 lg:py-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.</p>
                        <Button name="Watch Video" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}