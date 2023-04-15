
export default function Skill() {

    return(
        <>
        <section className="skill-section w-full h-full bg-[#121212]">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 md:px-20 ">
                    <div className=" text-left text-white mb-16  mt-20 md:mt-40">
                        <h1 className="font-bold text-2xl md:text-6xl pb-12">Here are some of our great skills</h1>
                        <p className="text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.</p>
                    </div>
                    <div className=' text-left text-white  mt-12 md:mt-32'>
                        <ul className='skill-container'>
                            <li className='ui-design'>UI DESIGN</li>
                            <li className='ux-design'>UX DESIGN</li>
                            <li className='digital-marketing'>DIGITAL MARKETING</li>
                            <li className='social-media'>SOCIAL MEDIA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}