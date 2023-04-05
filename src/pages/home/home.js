import Banner from '../../section/home/banner';
import Service from '../../section/home/service';
import Space from '../../section/home/space';
import Work from '../../section/home/work';

export default function home() {
    return(
        <>
        <div>
            <Banner />
            <Service />
            <Space />
            <Work />
        </div>

    </>
    );
}