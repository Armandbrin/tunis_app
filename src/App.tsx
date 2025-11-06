import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="w-full flex justify-center p-5 border-b border-[#ECEBF5] shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      <section className="flex justify-center items-center w-full gap-30">
        <button className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out">
          Menu
        </button>
        <button className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out">
          Cursus
        </button>
        <button className="hover:bg-[#F2F2F2] text-[#E70013] rounded-lg font-bold px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out">
          Cours
        </button>
      </section>
      <h1 className="text-5xl text-center font-bold w-full">Tunis Formation</h1>
      <section className="flex justify-center items-center w-full gap-30">
        <button className="hover:bg-[#F2F2F2] text-[#E70013] font-bold rounded-lg px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out">
          Se connecter
        </button>
        <button className="hover:bg-[#F2F2F2] text-[#E70013] font-bold rounded-lg px-3 py-2 hover:shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition duration-300 ease-in-out">
          S'inscrire
        </button>
      </section>
    </header>
  );
}

function Main() {
  return (
    <main>
      <a>Proposition de cursus</a>
      <section></section>
      <a>Proposition de cours</a>
      <section></section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <section></section>
    </footer>
  );
}

export default App;
