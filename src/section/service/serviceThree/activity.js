import TopTitleTwo from '../../../components/TopTitleTwo';
import Image from '../../../asset/activity_1.jpg';
import HorizontalLine from "../../../components/HorizontalLine";
// import Card from "../../../components/Card";

export default function Activity() {
    let heading =[
        {
            titleData:'Activity Tracker.',
            subTitle:'what are the advantages of this product?',
        }
    ];


    return(
        <>
        <section className="service-section md:px-20 px-12 bg-[#121212]">
            <div className='flex justify-center items-center h-full w-full py-20'>
                    {heading.map((headings) =>
                        <TopTitleTwo headings={headings} />
                    )}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 h-auto drop-shadow-md text-white">
                <div>
                    <img src={Image} alt='activity'/>
                </div>
                <div className='text-left'>
                    <h3 className='font-bold text-2xl pb-4'>Customer Opinion</h3>
                    <p className='text-1xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat posuere orci, eget semper magna suscipit nec.</p>
                </div>
            </div>
            <div className='py-20'>
                <HorizontalLine />
            </div>
        </section>
        </>
    )
}