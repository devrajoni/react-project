import Image2 from "../../../asset/service_work.jpg";
import Button from "../../../components/Button";

export default function Work() {

    return(
        <>
        <section className="skill-section w-full h-full bg-[#121212]">
            <div className="px-20">
                <div className="grid grid-cols-2 gap-12 ">
                    <div className="grid-cols-6 text-white  mt-12 md:mt-40 mb-24">
                        <h1 className="font-bold text-6xl pb-12">Here are some of our great skills</h1>
                        <p className="text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.</p>
                    </div>
                    <div className="grid-cols-6 mt-12 md:mt-40 mb-24">
                    <progress id="file" value="90" max="100" className="text-white"> 32% </progress>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}