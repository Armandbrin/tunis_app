import { Cursus } from "./Cursus";
import { Cours } from "./Cours";
import { useEffect, useState } from "react";

export interface CoursType {
  id: number;
  name: string;
  price: number;
  online: boolean;
  image_url: string;
  category_name: string;
  author: string;
};

export function Main() {
  const [cours, setCours] = useState<CoursType[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/lessons")
      .then((response) => response.json())
      .then((response) => {
        setCours(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="p-5 grow-1">
      <a
        className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
        href=""
      >
        Cursus :
      </a>
      <section className="flex gap-20 p-10 overflow-x-scroll">
        {cours.map((cours) => (
          <Cursus key={cours.id} cours={cours} />
        ))}
      </section>
      <a
        className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
        href=""
      >
        Cours :
      </a>
      <section className="flex gap-20 p-10 overflow-x-scroll">
        {cours.map((cours) => (
          <Cours key={cours.id} cours={cours} />
        ))}
      </section>
    </main>
  );
}
