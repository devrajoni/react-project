
import Image from '../../asset/about_business.jpg';
import Button from "../../components/Button";
// import Card from "../../../components/Card";

export default function Business() {

    return(
        <>
        <section className="service-section md:px-20 px-12 mt-20 md:mt-40">
            <div class="grid grid-cols-12 gap-12  h-auto drop-shadow-md text-white">
                <div className='col-span-12 md:col-span-6'>
                    <img src={Image} alt='activity'/>
                </div>
                <div className='col-span-12 md:col-span-6 text-left'>
                    <h3 className='font-bold text-2xl md:text-6xl'>Best Solutions for Your Business</h3>
                    <p className='text-1xl py-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.</p>
                    <Button name="Watch Video" />
                </div>
            </div>
        </section>
        </>
    )
}