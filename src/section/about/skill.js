import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from '../../asset/about_skill.jpg';
import { useEffect, useState } from "react";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";
// import Card from "../../../components/Card";

export default function Skill() {
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        const loadData = async() => {
            const url = `${BASE_URL}/about-skill`;
            try{
                const response = await fetch(url);
                const result = await response.json();
                setSkill(result.data);
            }catch(error){
                console.log(error)
            }
        };
        loadData();
    },[]);

    return(
        <>
        <section className="skill-section  px-6 lg:px-20 bg-[#121212]">
            <div>
                <div class="grid grid-cols-12 gap-y-4 lg:gap-12 h-auto">
                    <div className='col-span-12 md:col-span-12 lg:col-span-6 text-left text-white mb-16  mt-20 lg:mt-32'>
                        <h3 className='font-bold text-2xl md:text-6xl pb-4'>Here are some of our great skills</h3>
                        <p className='text-1xl md:mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat posuere orci, eget semper magna suscipit nec.</p>
                        <ul className='skill-container'>
                            <li className='DURABILITY'>DURABILITY</li>
                            <li className='BATTERYLIFE'>BATTERY LIFE</li>
                            <li className='DESIGN'>DESIGN</li>
                            <li className='CONVENIENCE'>CONVENIENCE</li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-6 text-left text-white  mt-12 lg:mt-32'>
                        <LazyLoadImage src={Image} alt='activity'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}