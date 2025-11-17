import { Cards } from "../componants/cards";
import { LessonsFetch } from "../componants/LessonsFetch";

export function Main() {
  const cours = LessonsFetch();
  return (
    <main className="p-5 grow-1">
      <a
        className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
        href="/cursus"
      >
        Cursus :
      </a>
      <section className="flex gap-20 p-10">
        {cours.slice(0, 10).map((cours) => (
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
  );
}
