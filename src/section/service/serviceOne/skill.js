
export default function Skill() {

    return(
        <>
        <section className="service-section px-6 lg:px-20 bg-[#121212]">
            <div className="">
                <div className="grid grid-cols-12 md:gap-12 h-auto pb-16 ">
                    <div className="col-span-12 md:col-span-6 text-left text-white mb-16  mt-16 lg:mt-40">
                        <h1 className="font-bold text-2xl lg:text-6xl pb-12">Here are some of our great skills</h1>
                        <p className="text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.</p>
                    </div>
                    <div className='col-span-12 md:col-span-6 text-left text-white sm:mt-4 md:mt-12 lg:mt-32'>
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