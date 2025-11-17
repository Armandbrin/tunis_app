import { Cards } from "../componants/cards";
import { LessonsFetch } from "../componants/LessonsFetch";

export function Cours() {
  const cours = LessonsFetch();
  return (
    <main>
      <h1 className="text-6xl text-center p-5 underline font-bold">Cours</h1>
      <section className="flex flex-wrap w-screen gap-20 p-10">
        {cours.map((cours) => (
          <Cards key={cours.id} cours={cours} />
        ))}
      </section>
    </main>
  );
}
