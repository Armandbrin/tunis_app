import { Cursus } from "./Cursus";
import { Cours } from "./Cours";
import { useEffect, useState } from "react";

export function Main() {
  const [cursus, setCursus] = useState<CursusType[]>([]);
  useEffect(() => {
    fetch("http://10.120.28.86:8080/lessons")
      .then((response) => response.json())
      .then((response) => {
        setCursus(response);
      })
      .catch((error) => console.error(error));
  }, []);

  type CursusType = {
    id: number;
    name: string;
    price: number;
    online: boolean;
    image_url: string;
    category_name: string;
    author: string;
  };

  return (
    <main className="p-5 grow-1">
      <a
        className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
        href=""
      >
        Cursus :
      </a>
      <section className="flex gap-20 p-10 overflow-x-scroll">
        {cursus.map((cursus) => (
          <Cursus key={cursus.id} cursus={cursus} cursusType={CursusType} />
        ))}
      </section>
      <a
        className="text-2xl hover:text-[#E70013] hover:underline transition duration-300 ease-in-out"
        href=""
      >
        Cours :
      </a>
      <section className="flex justify-around p-5">
        <Cours
          price={12.99}
          name={"Introduction à React et aux Composants Fonctionnels."}
        />
        <Cours
          price={15.99}
          name={"Créer des Animations Avancées avec CSS et Framer Motion."}
        />
        <Cours
          price={19.89}
          name={
            "Les Fondamentaux de TypeScript pour le Développement Frontend."
          }
        />
        <Cours
          price={19.99}
          name={"Optimiser les Requêtes SQL pour Améliorer les Performances."}
        />
        <Cours
          price={17}
          name={"Déploiement d’Applications sur le Cloud avec Docker et AWS."}
        />
      </section>
    </main>
  );
}
