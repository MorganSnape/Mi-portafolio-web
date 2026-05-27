import { useEffect, useState } from "react";

import Flecha from "@/assets/flecha.svg";

type titlesType = {
  id: string;
  text: string;
}

export default function SideNav() {
  const [titles, setTitles] = useState([] as titlesType[]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"));

    const arrTitles = elements.map((title) => ({
      id: title.id,
      text: title.textContent,
    }));

    setTitles(arrTitles);
  }, []);

  return (
    <aside className="sticky p-4 w-60 top-0 h-screen overflow-y-auto bg-black-secondary">
      <ul className="flex flex-col gap-4">
        <li className="border-b-2 border-gray-400 h-12 mb-4">
          <a href="/blog" className="flex flex-row items-center gap-4 h-full text-lg text-white hover:text-gray-400">
            <svg className="w-8 rotate-180"  id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.75 69.55">
              <g id="Recursos">
                <g>
                  <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="6px" d="M.52,61.37c15.95,2.81,31.36-2.48,39.52-14,6.71-9.47,9.88-22,3.95-34C38.84,2.94,28.18-.63,18.3,7.37c-9,7.29-5.61,19.7-1.98,24,11.86,14,41.5,10,86.95,10" />
                  <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="6px" points="75.61 17.37 103.27 41.37 75.61 67.37" />
                </g>
              </g>
            </svg>
            Inicio de Blog
          </a>
        </li>
        {titles.map((title) => (
          <li key={title.id}>
            <a href={`#${title.id}`} className="text-white hover:text-gray-400">{title.text}</a>
          </li>))}
      </ul>
    </aside>
  );
}