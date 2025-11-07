type ArticleProps = {
  name: string;
  price: number;
};
export function Cours({ price, name }: ArticleProps) {
  return (
    <>
      <a
        className="rounded-lg bg-[#F2F2F2] hover:bg-white h-[40vh] w-[16vw] shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:shadow-none transition duration-300 ease-in-out p-3 flex flex-col"
        href=""
      >
        <div className="flex justify-center h-[50%] bg-white rounded-lg p-3">
          <img src="src/assets/react.svg" alt="" />
        </div>
        <h3 className="pt-2 grow-1 text-center font-semibold">{name}</h3>
        <p className="text-right font-bold">{price}</p>
      </a>
    </>
  );
}
