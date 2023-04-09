import Banner from '../../section/home/banner';
import Service from '../../section/home/service';
import Space from '../../section/home/space';
import Work from '../../section/home/work';
import Space2 from '../../section/home/space2';
import About from '../../section/home/about';
import Testimonial from '../../section/home/testimonial';
import LatestNews from '../../section/home/latestNews';
import Inquiry from '../../section/home/inquiry';
import HomeFooter from '../../section/home/homeFooter';

export default function home() {
    return(
        <>
        <div>
            <Banner />
            <Service />
            <Space />
            <Work />
            <Space2 />
            <About />
            <Testimonial />
            <LatestNews />
            <Inquiry />
            <HomeFooter />
        </div>

    </>
    );
}