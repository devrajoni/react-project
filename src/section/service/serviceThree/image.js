import Image2 from "../../../asset/single_service.jpg";

export default function Image() {

    return(
        <>
        <section className="header-section relative w-full bg-slate-900">
            <img
            src={Image2}
            className="w-full bg-cover h-full absolute"
            alt="banner"
            />
        </section>
        </>
    )
}