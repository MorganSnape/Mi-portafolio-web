import { useEffect, useState } from "react";

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
    <aside className="p-4 w-60 sticky top-0 h-screen overflow-y-auto bg-color-secundario border-2 border-color-primario">
      <ul>
        {titles.map((title) => (
          <li key={title.id}> <a href={`#${title.id}`}>{title.text}</a>
          </li>))}
      </ul>
    </aside>
  );
}