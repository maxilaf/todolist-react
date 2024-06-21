import { useRef, useState } from "react";
import "./App.css";

function App() {
  // state (état, données)
  const [taches, setTaches] = useState([{ id: 1, nom: "Pomme" },
    { id: 2, nom: "Ananas" },
    { id: 3, nom: "Pastèque" },]);

  const inputRef = useRef();

  // comportements
  const addTaches = (event) => {
    event.preventDefault();
    const tachesLenght = taches.length + 1;
    const newTaches = { id: tachesLenght, nom: inputRef.current.value };
    setTaches([...taches, newTaches]);
    console.log(taches);
  };

  const deleteLi = (id) => {
    const copyTaches = [...taches];
    copyTaches.splice(id - 1, 1);
    setTaches(copyTaches);
  };

  // Affichage

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form action="submit" onSubmit={addTaches}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Entrez votre votre tache"
        />
        <button>Ajouter la tache</button>
      </form>
      <ul>
        {taches.map((tache) => {
          return (
            <li key={tache.id}>
              <input type="checkbox" />
              {tache.nom} <button onClick={() => deleteLi(tache.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
