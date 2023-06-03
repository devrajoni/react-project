export default function card({ cardContent }) {
  const { icon, name, short_description } = cardContent;
  return (
    <>
      <div className="text-[#66FCF1] text-4xl mb-8 md:text-4xl">
        <ion-icon name={icon}></ion-icon>
      </div>
      <div className="content">
        <h1 className="font-bold text-2xl pb-4 text-white">{name}</h1>
        <hr className="mb-4 h-0.5 text-2xl w-16 bg-[#66FCF1]" />
        <div
          className="font-medium text-white"
          dangerouslySetInnerHTML={{ __html: short_description }}
        />
      </div>
    </>
  );
}
