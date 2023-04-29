import Image2 from "../../../asset/single_service.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Image() {
  return (
    <>
      <section className="header-section w-full bg-slate-900">
        <LazyLoadImage src={Image2} className="w-full h-full" alt="banner" />
      </section>
    </>
  );
}
