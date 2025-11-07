type CursusProps = {
  cursus: CursusType;
};
export function Cursus({ cursus }) {
  return (
    <>
      <a
        className="rounded-lg bg-[#F2F2F2] hover:bg-white h-[40vh] w-[15vw] shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:shadow-none transition duration-300 ease-in-out p-5 flex-none"
        href={cursus.id}
      >
        {/* <article className="rounded-lg hover:bg-[#F2F2F2] h-[40vh] w-[16vw] hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out p-3 flex flex-col" href=""> */}
        <div className="flex flex-col w-full h-full">
          <img src={cursus.image_url} alt="" className="rounded-lg h-[50%]" />
          <h3 className="pt-2 grow-1 text-center font-semibold">
            {cursus.name}
          </h3>
          <p className="text-right font-bold">{cursus.price}€</p>
        </div>
      </a>
    </>
  );
}
