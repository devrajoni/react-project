import Banner from '../../section/home/banner';
import Service from '../../section/home/service';
import Work from '../../section/home/work';
import About from '../../section/home/about';
import Testimonial from '../../section/home/testimonial';

export default function home() {
    return(
        <>
        <div>
            <Banner />
            <Service />
            <Work />
            <About />
            <Testimonial />
        </div>

    </>
    );
}