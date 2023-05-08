export default function Button({name, type=''}) {
    return(
        <>
        <div>
            <button type={type} className="outline outline-[#66FCF1] hover:opacity-50 p-4 md:p-6 font-bold text-1xl uppercase">{name}</button>
        </div>
    </>
    );
}