import Image2 from "../../../asset/service_work.jpg";
import Button from "../../../components/Button";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Work() {

    return(
        <>
        <section className="relative w-full h-72 bg-slate-900">
            <LazyLoadImage src={Image2} className="w-full bg-cover h-80 absolute" alt="banner" />
            <div className="flex justify-center items-center px-6 lg:px-20 h-80 w-full bg-slate-900">
                <div className="absolute text-center text-white">
                    <h1 className="font-bold text-4xl md:text-6xl whitespace-pre-wrap pb-8">Wanna see our works?</h1>
                    <Button name="All Projects" />
                </div>
            </div>
        </section>
        </>
    )
}