import { useEffect, useState } from "react";
import type { CoursType } from "../componants/Types";

export function LessonsFetch() {
  const [cours, setCours] = useState<CoursType[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/lessons")
      .then((response) => response.json())
      .then((response) => {
        setCours(response);
      })
      .catch((error) => console.error(error));
  }, []);
  return cours;
}
