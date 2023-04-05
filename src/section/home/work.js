import TopTitle from '../../components/TopTitle';
import Button from "../../components/Button";

export default function Work() {
    let heading =[
        {
            titleData:'Works.',
            subTitle:"THINGS WE'VE MADE",
        }
    ];

    return(
        <>
        <section className="work-section text-white bg-[#121212] mt-20 md:mt-40">
            <div className='md:px-20 px-12 py-12 flex justify-between'>
                <div>
                    {heading.map((headings) =>
                        <TopTitle headings={headings} />
                    )}
                </div>
                 <Button name="View All"/>
            </div>
        </section>
        </>
    )
}