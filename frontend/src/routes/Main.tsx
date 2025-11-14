import { Cards } from "../componants/cards";
import { Header } from "../componants/Header";
import { Footer } from "../componants/Footer";
import { LessonsFetch } from "../componants/LessonsFetch";

export function Main() {
  const cours = LessonsFetch();
  return (
    <>
      <Header />
      <main className="p-5 grow-1">
        <a
          className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
          href="/cursus"
        >
          Cursus :
        </a>
        <section className="flex gap-20 p-10">
          {cours.slice(0, 5).map((cours) => (
            <Cards key={cours.id} cours={cours} />
          ))}
        </section>
        <a
          className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
          href="/cours"
        >
          Cours :
        </a>
        <section className="flex gap-20 p-10">
          {cours.slice(0, 5).map((cours) => (
            <Cards key={cours.id} cours={cours} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
