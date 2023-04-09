export default function TopTitle({headings}) {

    const {
        titleData, subTitle} = headings;

    return(
        <>
        <div className="flex gap-3 text-left pb-4">
            <hr className=" mt-8 h-0.5 text-2xl w-16 bg-[#66FCF1]" />
            <h1 className="font-bold text-3xl md:text-6xl text-white ">{titleData}</h1>
        </div>
        <h3 className="text-left text-1xl font-medium text-[#66FCF1]">{subTitle}</h3>
        </>
    )
}