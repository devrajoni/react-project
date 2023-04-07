export default function card({cardContent}) {
    const {icon, title, text} = cardContent;
    return(
        <>
            <div className="text-[#66FCF1] text-4xl mb-8 md:text-4xl">
                <ion-icon name={icon}></ion-icon>
            </div>
            <div className="content">
                <h1 className="font-bold text-2xl pb-4 text-white">{title}</h1>
                <hr className="mb-4 h-0.5 text-2xl w-16 bg-[#66FCF1]" />
                <p className="font-medium text-white">{text}</p>
            </div>
        </>
    );
}