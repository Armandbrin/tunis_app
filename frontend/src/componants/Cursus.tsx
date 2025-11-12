import type { CoursType } from "./Main";

interface CoursProps {
  cours: CoursType;
};

export function Cursus({ cours }: CoursProps) {
  return (
    <>
      <a
        className="rounded-lg bg-[#F2F2F2] hover:bg-white h-[40vh] w-[15vw] shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:shadow-none transition duration-300 ease-in-out p-5 flex-none"
        href={"" + cours.id}
      >
        <div className="flex flex-col w-full h-full">
          <img src={cours.image_url} alt="" className="rounded-lg h-[50%]" />
          <h3 className="pt-2 grow-1 text-center font-semibold">
            {cours.name}
          </h3>
          <p className="text-right font-bold">{cours.price}€</p>
        </div>
      </a>
    </>
  );
}
