export default function TopTitleTwo({headings}) {

    const {
        titleData, subTitle} = headings;

    return(
        <>
        <div className="gap-3 pb-4">
            <h1 className="font-bold text-3xl md:text-6xl text-white py-4">{titleData}</h1>
            <h3 className="text-left text-1xl font-medium text-center text-[#66FCF1]">{subTitle}</h3>
        </div>

        </>
    )
}