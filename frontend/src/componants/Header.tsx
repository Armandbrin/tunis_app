export function Header() {
  return (
    <header className="w-full flex justify-center p-5 border-b border-[#ECEBF5] shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      <section className="flex justify-center items-center w-full gap-30">
        <a className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out cursor-pointer" href="/">
          Menu
        </a>
        <a className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out cursor-pointer" href="/cursus">
          Cursus
        </a>
        <a className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out cursor-pointer" href="/cours">
          Cours
        </a>
      </section>
      <h1 className="text-5xl text-center font-bold w-full">Tunis Formation</h1>
      <section className="flex justify-center items-center w-full gap-30">
        <a className="hover:bg-[#F2F2F2] text-[#E70013] font-bold rounded-lg px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out cursor-pointer">
          Se connecter
        </a>
        <a className="bg-[#F2F2F2] hover:bg-white text-[#E70013] rounded-lg font-bold px-3 py-2 shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
          S'inscrire
        </a>
      </section>
    </header>
  );
}
