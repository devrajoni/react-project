export default function Button(props) {
    const {name} = props

    return(
        <>
        <div>
            <button className="outline outline-[#66FCF1] hover:opacity-50 p-6 font-bold text-1xl uppercase">{name}</button>
        </div>
    </>
    );
}