
import Image from '../../asset/about_skill.jpg';
import HorizontalLine from "../../components/HorizontalLine";
// import Card from "../../../components/Card";

export default function Skill() {

    return(
        <>
        <section className="service-section md:px-20 px-12 bg-[#121212]">
            <div class="grid grid-cols-12 gap-12 py-32 h-auto drop-shadow-md text-white">
                <div className='col-span-12 md:col-span-6 text-left'>
                    <h3 className='font-bold text-2xl md:text-6xl pb-4'>Here are some of our great skills</h3>
                    <p className='text-1xl py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat posuere orci, eget semper magna suscipit nec.</p>
                    <ul className='skill-container'>
                        <li className='DURABILITY'>DURABILITY</li>
                        <li className='BATTERYLIFE'>BATTERY LIFE</li>
                        <li className='DESIGN'>DESIGN</li>
                        <li className='CONVENIENCE'>CONVENIENCE</li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <img src={Image} alt='activity'/>
                </div>
            </div>
        </section>
        </>
    )
}