import TopTitle from '../../components/TopTitle';
import Button from "../../components/Button";
import work_one from "../../asset/home_two_works1.jpg";
import work_two from "../../asset/home_two_works2.jpg";
import work_three from "../../asset/home_two_works3.jpg";
import work_four from "../../asset/home_two_works4.jpg";
import work_six from "../../asset/home_two_works6.jpg";
import work_eight from "../../asset/home_two_works8.jpg";
import work_nine from "../../asset/home_two_works9.jpg";

export default function HomeService() {
    let heading =[
        {
            titleData:'Works.',
            subTitle:'OUR SERVICES FOR CLIENTS',
        }
    ];

    return(
        <>
        <section className="bg-[#121212] ">
            <div className="mt-12 md:mt-16 md:px-20 px-8 text-white">
                <div className="pt-28 pb-16 flex justify-between">
                    <div className="content">
                    {heading.map((headings) => (
                        <TopTitle headings={headings} />
                    ))}
                    </div>
                    <Button name="View All" />
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_one}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_three}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className='flex items-center h-full'>
                            <div className="md:text-left w-96 pt-4">
                                <h3 className="font-bold text-4xl mb-4">Create your brand</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat diam ac.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-4">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_two}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_four}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_six}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-4">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className='flex items-center h-full'>
                            <div className="md:text-left w-96 pt-4">
                                <h3 className="font-bold text-4xl mb-4">Make it famous</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat diam ac.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_eight}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="relative group">
                            <img
                            src={work_nine}
                            alt=""
                            className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0">
                                {/* <div className="text-white text-bold bottom-0 left-0 text-2xl p-8 ">
                                    <h3>Philosophy</h3>
                                    <p className="">Trust pays off</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}